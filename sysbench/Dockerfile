FROM ubuntu:20.04

RUN apt update && apt install -y sysbench \
    && apt clean \
    && rm -rf /var/lib/apt/lists/* \
