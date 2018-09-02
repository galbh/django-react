from .base import *

# TODO: setting debug to false results in static files not being served - SHOULD FIX
DEBUG = True

ALLOWED_HOSTS = ['*']

# TODO: implement decouple library to hide sensitive data
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'd1bap8uve5mgcd',
        'USER': 'eiidvvckiyhkwb',
        'PASSWORD': 'cecf99710f4586fba1f4563339ce94a1cf65e69dba1d70765aece8b6dc690643',
        'HOST': 'ec2-54-221-210-97.compute-1.amazonaws.com',
        'PORT': '5432',
    }
}