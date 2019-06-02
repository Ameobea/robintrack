FROM python:3.7

# We add it to this path so that the relative paths to the `python_common` module match up
ADD ./scripts/popularity_history_exporter /app/scripts/popularity_history_exporter
ADD ./python_common /app/python_common

WORKDIR /app/python_common
RUN pip install -r requirements.txt

WORKDIR /app/scripts/popularity_history_exporter
RUN pip install -r requirements.txt

CMD ["./run_exporter.sh"]
