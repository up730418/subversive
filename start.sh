#!/bin/sh

sudo node /home/pi/subversive/node_modules/raspberry-pi-mjpeg-server/raspberry-pi-mjpeg-server.js -q 100 -w 1280 -l 1024 -t 1 -p 8300 &
node /home/pi/subversive/server.js &
