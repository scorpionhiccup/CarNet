from django.shortcuts import render
from django.http import HttpResponse
from .models import traffic_data

def postInfo(request, signal_no, car_no):
	str= " Bla " + signal_no + " " + car_no + " "
	new_entry=traffic_data(
		signal_no=signal_no,
		car_no=car_no)

	new_entry.save()
	return HttpResponse(str)


#def getInfo(request, )