build_scraper:
  docker build -t robintrack-scraper -f Dockerfile.scraper .

build_popularity_exporter:
  docker build -t robintrack-popularity-exporter -f Dockerfile.popularity_exporter .
