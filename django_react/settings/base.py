import os

from attr import dataclass
from decouple import config

PROJECT_DIR_NAME = 'django_react'

@dataclass
class Environments:
    dev = '{}.settings.development'.format(PROJECT_DIR_NAME)
    prod = '{}.settings.production'.format(PROJECT_DIR_NAME)


# CHANGE TO - ENVIRONMENTS.prod - BEFORE DEPLOYING !
ENVIRONMENT = Environments.dev

print('running in {} environment'.format(ENVIRONMENT))

CURRENT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE_DIR = os.path.abspath(os.path.join(CURRENT_DIR, os.pardir))
STATIC_FILES_LOCATION = os.path.join(CURRENT_DIR, 'staticfiles')

SECRET_KEY = config('SECRET_KEY')


# Application definition
INSTALLED_APPS = [
    'backend.accounts',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'rest_framework_swagger',
    'channels'
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
]

ROOT_URLCONF = '{}.urls'.format(PROJECT_DIR_NAME)

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [STATIC_FILES_LOCATION],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = '{}.wsgi.application'.format(PROJECT_DIR_NAME)


# Password validation
# https://docs.djangoproject.com/en/1.11/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
    )
}


# Internationalization
# https://docs.djangoproject.com/en/1.11/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Urls
LOGIN_URL = '/accounts'
LOGOUT_URL = '/'
LOGOUT_REDIRECT_URL = '/'


# EMAIL configuration
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_USE_TLS = config('EMAIL_USE_TLS')
EMAIL_PORT = config('EMAIL_PORT')
EMAIL_HOST = config('EMAIL_HOST')
EMAIL_HOST_USER = config('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = config('EMAIL_HOST_PASSWORD')
SERVER_EMAIL = config('SERVER_EMAIL')
DEFAULT_FROM_EMAIL = config('DEFAULT_FROM_EMAIL')

# Channels
ASGI_APPLICATION = '{}.routing.application'.format(PROJECT_DIR_NAME)

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.11/howto/static-files/

STATIC_ROOT = STATIC_FILES_LOCATION
STATIC_URL = '/static/'
STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'frontend', 'core-app', 'dist'),
    os.path.join(BASE_DIR, 'frontend', 'public-app', 'dist'),
    os.path.join(BASE_DIR, 'frontend', 'templates'),
)
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
