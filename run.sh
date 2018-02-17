#!/usr/bin/env bash

docker run \
    --name centro-assistenza-bramucci \
    --rm \
    -p 8000:80 \
    -it eu.gcr.io/fotobeg/centro-assistenza-bramucci:v1