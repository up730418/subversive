import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BOARD)
GPIO.setup(11,GPIO.OUT)
pwm=GPIO.PWM(11,50)
##Anticlockwise
pwm.start(10)
##Clockwise
#pwm.start(5)
time.sleep(2)
pwm.stop()
GPIO.cleanup()
