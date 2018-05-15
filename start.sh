#!/bin/sh

sudo node node_modules/raspberry-pi-mjpeg-server/raspberry-pi-mjpeg-server.js -q 100 -w 1280 -l 1024 -t 1 -p 8300 &
nohup node  server.js &
