#!/bin/bash

export PYTHONPATH="${PWD}/../../"
export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8

python main.py $1
python build_eod_csv_combined.py $1
