from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import traffic_data
from django.shortcuts import render_to_response
from django.template import RequestContext

def postInfo(request, signal_no, car_no):
	str= "Received: " + signal_no + " : " + car_no + " "
	new_entry=traffic_data(
		signal_no=signal_no,
		car_no=car_no)

	new_entry.save()
	return HttpResponse(str)


def getInfo(request, signal_no):
	ans={}
	ans[signal_no]=[]

	for obj in traffic_data.objects.filter(signal_no=signal_no):
		ans[signal_no].append(obj.car_no)

	return JsonResponse(ans)

def main(request):
	return render_to_response('heatmap.html', 
		RequestContext(request, {}));
