#!/usr/bin/env bash

npm run build

docker build -t eu.gcr.io/fotobeg/centro-assistenza-bramucci:v1 .

