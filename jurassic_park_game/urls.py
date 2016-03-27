from django.conf.urls import include, url
from django.conf import settings
from django.conf.urls import patterns
from django.conf.urls.static import static
from django.contrib import admin
from apps.level_1 import views

urlpatterns = [
   url(r'^admin/', include(admin.site.urls)),
   url(r'^$', views.index),
]

if settings.DEBUG:
    urlpatterns += patterns('',
        url(r'^media/(?P<path>.*)$', 'django.views.static.serve', {
            'document_root': settings.MEDIA_ROOT,
        }),
        url(r'^static/(?P<path>.*)$', 'django.views.static.serve', {
            'document_root': settings.STATIC_ROOT,
        }),
)
