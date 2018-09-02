"""
ASGI entrypoint. Configures Django and then runs the application
defined in the ASGI_APPLICATION setting.
"""

import os
import django
from channels.routing import get_default_application
from django_react.settings import base as settings

os.environ.setdefault("DJANGO_SETTINGS_MODULE", settings.ENVIRONMENT)
django.setup()
application = get_default_application()
