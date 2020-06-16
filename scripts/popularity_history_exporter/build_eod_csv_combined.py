import os

import click

@click.command()
@click.argument("output-directory", type=click.Path())
def main(output_directory: str):
  out = open(os.path.join(output_directory, "combined.csv"), "w")
  out.write("date,asset,popularity\n")

  for fname in os.listdir(output_directory):
    if not ".csv" in fname:
      continue
    elif fname.startswith("combined"):
      continue

    symbol = fname.split(".csv")[0]
    if symbol.startswith("_"):
      symbol = symbol[1:]
    with open(os.path.join(output_directory, fname)) as f:
      next(f) # skip header row

      last_date = None
      for line in f:
        date = line[1:11]
        if date == last_date:
          continue

        last_date = date
        popularity = line.split('",')[1]

        out.write(date)
        out.write(",")
        out.write(symbol)
        out.write(",")
        out.write(popularity)

if __name__ == "__main__":
  main() # pylint: disable=no-value-for-parameter
