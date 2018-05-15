This folder contains all the files necessary to set up the pi to work for this project. 
If you have modified these files before use your own discretion during this setup else simply copy all the following files to the places suggested at the top of each file. 
It is also suggested that you backup the original files incase you want to revert these changes.

Finally ensure SSH is enabled on your pi for easier access.

Once all the files are copied run `sudo sh setup.sh` then `sudo shutdown -r now` once the pi reboots you should be able to access the WiFi named PI3-AP. 

To SSH into the pi you can access it via `pi@192.168.5.1` as the pi distributes addresses in the 192.168.5.xxx range with itself being 192.168.5.1.