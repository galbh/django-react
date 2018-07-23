from django.conf.urls import url
from django.contrib import admin
from django.urls.conf import include

from django_react.views import index
from rest_framework_swagger.views import get_swagger_view

swagger_view = get_swagger_view(title='Django react API')

urlpatterns = [
    url(r'^$', view=index),
    url(r'^swagger/$', swagger_view),
    url(r'^accounts/', include('backend.accounts.urls')),
    url(r'^admin/', admin.site.urls),
]
