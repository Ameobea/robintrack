# This must be 3.6 because the `pika` library uses the `async` keyword which breaks 3.7*
FROM python:3.6

ADD . /app
WORKDIR /app

RUN pip install -r requirements.txt

CMD ["./run_worker.sh"]
