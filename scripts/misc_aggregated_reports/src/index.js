const fetch = require("node-fetch");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const fs = require("fs");
const CsvReadableStream = require("csv-reader");
const _ = require("lodash");

const allDaysURL = "https://robintrack.net/api/barometer/timeseries";

const getAllDayIDS = () =>
  fetch(allDaysURL)
    .then((res) => res.json())
    .then((days) => days.map((day) => day.day_id));

const pullTopChangesByDay = async () => {
  const allDayIDs = await getAllDayIDS();

  const topChangesByDayID = (
    await Promise.all(
      allDayIDs.map((dayID) =>
        fetch(`https://robintrack.net/api/barometer/top_changes/${dayID}`)
          .then((res) => res.json())
          .then((topChanges) =>
            topChanges.map((change) => ({ ...change, dayID }))
          )
      )
    )
  ).flatMap((x) => x);

  console.log(topChangesByDayID);
  const csvWriter = createCsvWriter({
    path: "/home/casey/Downloads/robintrack_data/top_changes_by_day.csv",
    header: [
      { id: "dayID", name: "Day" },
      { id: "symbol", name: "Symbol" },
      { id: "name", name: "Company Name" },
      { id: "start_popularity", name: "Start Popularity" },
      { id: "end_popularity", name: "End Popularity" },
      { id: "start_price", name: "Start Price" },
      { id: "end_price", name: "End Price" },
    ],
  });
  csvWriter.writeRecords(topChangesByDayID).then(() => console.log("done"));
};

const readEODCombined = (cb) => {
  const inputStream = fs.createReadStream(
    "/home/casey/Downloads/robintrack-eod-combined.csv",
    { encoding: "utf8" }
  );

  const records = [];
  inputStream
    .pipe(new CsvReadableStream({ parseNumbers: true }))
    .on("data", (record) => {
      records.push(record);
    })
    .on("end", () => {
      cb(records);
    });
};

const pullMostPopularByDay = async () => {
  readEODCombined((records) => {
    console.log(
      "Read records from combined EOD popularity CSV",
      records.length
    );
    const mostPopularByDayID = {};

    records.forEach(([dayID, symbol, popularity]) => {
      if (!mostPopularByDayID[dayID]) {
        mostPopularByDayID[dayID] = [];
      }

      if (mostPopularByDayID[dayID].length > 10) {
        if (
          mostPopularByDayID[dayID].some(
            (entry) => entry.popularity > popularity
          )
        ) {
          return;
        }
      }

      mostPopularByDayID[dayID].push({ symbol, popularity });
      if (mostPopularByDayID[dayID].length > 10) {
        const minPop = mostPopularByDayID[dayID]
          .map(({ popularity }) => popularity)
          .reduce((a, b) => Math.min(a, b), Infinity);
        const ixToRemove = mostPopularByDayID[dayID].findIndex(
          ({ popularity }) => popularity === minPop
        );
        mostPopularByDayID[dayID].splice(ixToRemove, 1);
      }
    });

    const csvWriter = createCsvWriter({
      path: "/home/casey/Downloads/robintrack_data/most_popular_by_day.csv",
      header: [
        { id: "dayID", name: "Day" },
        { id: "popularity", name: "Popularity" },
        { id: "symbol", name: "Symbol" },
      ],
    });
    const outRecords = _.sortBy(
      Object.entries(mostPopularByDayID).flatMap(([dayID, records]) =>
        records.map((record) => ({
          ...record,
          dayID,
          popularity: +record.popularity,
        }))
      ),
      ["dayID", (r) => -r.popularity]
    );
    csvWriter.writeRecords(outRecords).then(() => console.log("done"));
  });
};

pullMostPopularByDay();
