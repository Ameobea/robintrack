import os
from collections import OrderedDict

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

      d = OrderedDict()

      for line in f:
        date_str = line[1:11]
        popularity = line.split('",')[1]
        d[date_str] = popularity

      for date, popularity in d.items():
        out.write(date)
        out.write(",")
        out.write(symbol)
        out.write(",")
        out.write(popularity)

if __name__ == "__main__":
  main() # pylint: disable=no-value-for-parameter
