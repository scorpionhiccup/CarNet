from django.conf.urls import include, url, patterns
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    url(r'^postInfo/(?P<signal_no>\d+)/(?P<car_no>[-\w]{0,50})/$', 
    	'RestServices.views.postInfo'),
    url(r'^getInfo/(?P<signal_no>\d+)/$', 'RestServices.views.getInfo'),
]  + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
