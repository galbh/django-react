# Generated by Django 2.1 on 2018-08-03 13:31

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_auto_20180727_0304'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='phone_number',
            field=models.CharField(blank=True, max_length=12, validators=[django.core.validators.RegexValidator(message=('Phone number must be entered in the format: +999999999. Up to 15 digits allowed.',), regex='^\\+?1?\\d{9,15}$')]),
        ),
    ]
