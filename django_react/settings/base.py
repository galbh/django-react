import os

ENVIRONMENTS = {
    'development': 'django_react.settings.development',
    'production': 'django_react.settings.production',
}

# DEPLOY IN PRODUCTION ONLY !
ENVIRONMENT = ENVIRONMENTS['development']

CURRENT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE_DIR = os.path.abspath(os.path.join(CURRENT_DIR, os.pardir))

# TODO: SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '4oa-@ue@_ss97lhwh^f_!4%c32@t)b7zbebvxc&lc0cmir6c+9'


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
]

ROOT_URLCONF = 'django_react.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(CURRENT_DIR, 'staticfiles')],
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

WSGI_APPLICATION = 'django_react.wsgi.application'


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
EMAIL_USE_TLS = True
EMAIL_PORT = 587
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_HOST_USER = 'xxx@xxx.com'
EMAIL_HOST_PASSWORD = 'xxx'
SERVER_EMAIL = 'xxx@xxx.com'
DEFAULT_FROM_EMAIL = 'X Team <noreply@xxx.com>'


# Channels
ASGI_APPLICATION = "django_react.routing.application"
redis_host = os.environ.get('REDIS_HOST', 'redis-11506.c9.us-east-1-4.ec2.cloud.redislabs.com')
CHANNEL_LAYERS = {
    # "default": {
    #     "BACKEND": "channels_redis.core.RedisChannelLayer",
    #     "CONFIG": {
    #         "hosts": [(redis_host, 6379)], #11506
    #     },
    # },
}


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.11/howto/static-files/

STATIC_ROOT = os.path.join(CURRENT_DIR, 'staticfiles')
STATIC_URL = '/static/'
STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'frontend', 'core-app', 'dist'),
    os.path.join(BASE_DIR, 'frontend', 'public-app', 'dist'),
    os.path.join(BASE_DIR, 'frontend', 'templates'),
)
