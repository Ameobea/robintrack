# Running the Recommended Stocks Scraper

- Download the JSON file containing all stocks on Robinhood and save it somewhere on your computer.  You can download it from here: https://ameo.link/u/7n6.json
- Create a directory somewhere on your computer to store the output of the downloaded files
- Edit the file `src/scraper_recommended_stocks.py` and replace the path to the JSON file from the one I hard-coded to the location of the JSON file you downloaded.  To find it, search for the string `casey` in the source code and update all paths that contain it to correct paths for you.
- Update the path to the output directory in the soruce code of `src/scraper_recommended_stocks` as well to the path to the output directory you created previously.  If you search the code for the string `casey`, there should no longer be any results.
- Go to the robinhood.com website and login with your account.  Go the page for some stock like https://robinhood.com/stocks/WORK
- Open the network inspector of your browser and select one of the requests that are being sent and find one with `/marketdata` in the URL.  Right-click on it and select "Copy as cURL".
- Paste that into a text editor.  Search through the text until you see `Authorization: Bearer ` followed by a very long string.  Copy that very long string until the closing apostrphe without including it.
- Run `export BEARER_TOKEN='[paste the long string here]'`
- Make sure that your working directory is the directory above this one (`scraper`) and then run `export PYTHONPATH="${PWD}/../"`
- Run the scraper with this command: `python3 src/scrape_recommended_stocks.py`.  It will take several hours to run since it waits in between requests to avoid rate limiting issues.
- Once the script completes, there will be several thosuand .json files in the output directory corresonding to the recommendations for each stock on Robinhood.
