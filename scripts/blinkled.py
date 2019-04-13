#!/usr/bin/python

from gpiozero import LED
from signal import pause
import time

yellow = LED(26)

yellow.blink()

pause()
