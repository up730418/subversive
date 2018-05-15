import RPi.GPIO as GPIO
import time
#Install
# sudo pip install adafruit-ws2801

# Use physical pin numbers
GPIO.setmode(GPIO.BOARD)
# Set up header pin 11 (GPIO17) as an output
print "Setup Pin 12"
GPIO.setup(12, GPIO.OUT)
  
print "Start loop"

print "Set Output False"
GPIO.output(12, False)
time.sleep(4)
print "Set Output True"
GPIO.output(12, True)
time.sleep(4) 
