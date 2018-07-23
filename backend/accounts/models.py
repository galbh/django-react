from django.db import models
from django.core.validators import RegexValidator
from django.contrib.auth.models import User

from backend.accounts.constants import Constants
from backend.accounts.validations import Validations


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=50, blank=True)
    phone_regex = RegexValidator(regex=Validations().phone_regex, message=Constants().PHONE_NUMBER_INSTRUCTIONS)
    phone_number = models.CharField(validators=[phone_regex], blank=True, max_length=12)

    def __str__(self, **kwargs):
        return self.user.username

