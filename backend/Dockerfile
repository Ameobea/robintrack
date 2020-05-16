FROM ruby:2.7.1-alpine3.11

RUN apk update && \
  apk add --no-cache build-base libxslt-dev libxml2-dev sqlite-dev tzdata && \
  rm -rf /var/cache/apk/*

RUN mkdir /app
WORKDIR /app

COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock

RUN gem install pkg-config -v "~> 1.1"
RUN bundle config set without 'test development'
RUN bundle install

COPY . .

CMD ["/app/bin/rails", "s", "-b", "0.0.0.0", "-e", "production", "-p", "4000"]
