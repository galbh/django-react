#!/usr/bin/python
# -*- coding: utf-8 -*-


class Constants:

    ERROR_USER_EXISTS = 'user already exists'
    ERROR_ALL_FIELD_REQUIRED = 'all fields are required'
    ERROR_USER_NOT_FOUND = 'user not found'
    USER_CREATED_SUCCESS = 'user created successfully'
    LOGIN_SUCCESS = 'user logged in successfully'
    EMAIL_NOT_FOUND = 'email not found',
    INVALID_EMAIL = 'email is not valid'
    PHONE_NUMBER_INSTRUCTIONS = 'Phone number must be entered in the format: +999999999. Up to 15 digits allowed.',
    CHANGE_PASSWORD_REQUEST = 'data for changing password is included',
    BAD_REQUEST = 'bad request',
    EMAIL_SENT_SUCCESSFULLY = 'email was sent successfully'

    def __init__(self):
        pass
