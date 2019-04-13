#!/usr/bin/python3

from gpiozero import Servo
from signal import pause
from time import sleep

servo = Servo(19, initial_value=None, min_pulse_width=0.0005, max_pulse_width=0.002)
input("Initial position, press Enter to continue... (Next: Min)")

while True:
        servo.min()
        #servo.detach()
        input("Min position, press Enter to continue...(Next: Max)")
        servo.max()
        #servo.detach()
        input("Max position, press Enter to continue...(Next: Min)")
