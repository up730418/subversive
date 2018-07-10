# subversive
IBM subversive project 2018

## Installing

Run `git clone https://github.com/up730418/subversive`

Once thats completed run `npm install`

If you want to turn the PiFi on copy the instructions in piFiles/README.md
You will also need to run `sudo apt-get install libasound2-dev` for speaker library to work

When you are ready run `sh start.sh` then navigate to the server

## LCD Screen

For LCD screen the library found at https://github.com/goodtft/LCD-show/ has been used. 
To enable the screen clone this repo and follow the instructions in the README.md file.

To launch the browser on startup we need to edit the a startup file `nano /home/pi/.config/lxsession/LXDE-pi/autostart`.
Once in the file scroll to the bottom and on a new line insert the following lines of code 

`@xset s off`

`@xset -dpms`

`@xset s noblank`

`@chromium-browser --kiosk --incognito http://192.168.5.1:8080/screen.html `

The pi show the advert when it boots. Note that sometimes it takes a while before the browser appears.
