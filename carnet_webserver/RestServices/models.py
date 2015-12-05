from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import AbstractBaseUser

class traffic_data(models.Model):
	"""docstring for traffic_data"""
	car_no=models.CharField(max_length=200, default="")
	signal_no=models.IntegerField(default=100)
	objects=models.Manager()
	#datetime=

def __str__(self):
	return "%s: %s" % (self.signal_no, self.car_no)
