#!/usr/bin/env bash

npm run build --production

docker build -t eu.gcr.io/fotobeg/centro-assistenza-bramucci:v1 .

