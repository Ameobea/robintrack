FROM python:3.7.2

ADD . /app
WORKDIR /app

RUN pip install -r requirements.txt

CMD ["./run_worker.sh"]

