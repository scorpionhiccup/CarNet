from django.conf.urls import include, url, patterns

from django.conf import settings

urlpatterns = [
    url(r'^postInfo/(?P<signal_no>\d+)/(?P<car_no>[-\w]{0,50})/$', 
    	'RestServices.views.postInfo'),
]
