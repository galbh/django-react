from django.conf.urls import url
from django.contrib import admin
from django.urls.conf import include
from django_react.views import core_index
from rest_framework_swagger.views import get_swagger_view
from django.conf.urls.static import static
from django.conf import settings

swagger_view = get_swagger_view(title='Django react API')

urlpatterns = [
    url(r'^$', view=core_index),
    url(r'^swagger/$', swagger_view),
    url(r'^accounts/', include('backend.accounts.urls')),
    url(r'^admin/', admin.site.urls),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
