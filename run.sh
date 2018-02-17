#!/usr/bin/env bash

docker run \
    --name centro-assistenza-bramucci \
    --rm \
    -p 5000:5000 \
    -it eu.gcr.io/fotobeg/centro-assistenza-bramucci:v1