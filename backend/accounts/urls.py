from backend.accounts.views import SignUp, Login, LogOut, index
from django.conf.urls import url


urlpatterns = [
    url(r'^$', index),
    url(r'^login$', Login.as_view()),
    url(r'^signup$', SignUp.as_view()),
    url(r'^logout$', LogOut.as_view()),
    # url(r'^reset-password$', reset_password),
    # url(r'^password/reset/confirm/(?P<uidb64>[0-9A-Za-z_\-]+)/'
    #     r'(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
    #     reset_password_view,
    #     name='auth_password_reset_confirm'),
    # url(r'^password/change/$', change_password),
]
