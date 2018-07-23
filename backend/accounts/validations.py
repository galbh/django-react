from rest_framework.templatetags.rest_framework import simple_email_re


class Validations:
    phone_regex = r'^\+?1?\d{9,15}$'

    @staticmethod
    def validate_email(email):
        return simple_email_re.match(email)
