# RHTrack

RHTrack is a tool for viewing data about the popularity of various stocks on the Robinhood brokerage. It allows users to view information about which are the most (and least) popular stocks held by its users and view trends over time. When combined with price history and other forms of data, this can be a useful tool for analyzing market sentiment.

## Components

### Scraper

The scraper periodically scrapes the Robinhood API to pull popularity and price data for all of the stocks that it offers. A server/worker model is used, with RabbitMQ being used a work queue. Once scraped, the data is stored in MongoDB.

### Backend

The backend is a Rails application that mainly serves as a shim to the MongoDB database. It serves the API used by the frontend.

### Frontend

The frontend is a single-page React application that provides users with access to the site's data via data tables and visualizations.

## Installation

You'll need a MongoDB instance running and a RabbitMQ instance for the scraper. Configuration for the backend is handled via environment variables; the `MONGO_HOST` and `MONGO_PORT` variables are read at runtime. The scraper takes the same environment variables for MongoDB and everything else via command line arguments. Use the `--help` flag for both the master and worker scripts to view available config options.

### Docker

There is a Dockerfile provided for the backend. To use it, just run `docker build -t robinhood-backend` and then `docker run -it --net host -p 4000:4000 -e SECRET_KEY_BASE=some_secret_key -e MONGO_HOST=example.com -e MONGO_PORT=27017 robinhood-backend`. (`--net host` is only necessary if you have MongoDB or RabbitMQ running locally, and it doesn't work on Mac).
