# Stocktwits Bot

This is a bot that makes periodic posts to StockTwits about stock popularities pulled from Robintrack.

## Usage

The `STOCKTWITS_BOT_MODE` environment variable must be set with one of the following values in order to determine bot operation:

1. `top_popularity_changes` to run the daily top popularity changes job

## Modules

### Daily Top Popularity Changes

Every day at the end of the day, the bot will make posts for the top 10 stocks with popularity changes.
