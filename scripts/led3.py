import RPi.GPIO as GPIO
import time

# to use Raspberry Pi board pin numbers
GPIO.setmode(GPIO.BOARD)
  
# set up the GPIO channels - one input and one output
GPIO.setup(12, GPIO.OUT)
   

# output to pin 12
p = GPIO.PWM(12, 50)
p.start(0)
try:
    while 1:
        for dc in range(0, 101, 5):
            p.ChangeDutyCycle(dc)
            time.sleep(0.1)
        for dc in range(100, -1, -5):
            p.ChangeDutyCycle(dc)
            time.sleep(0.1)
except KeyboardInterrupt:
        pass
p.stop()
GPIO.cleanup()
