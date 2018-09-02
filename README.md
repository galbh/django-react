# Django - React.js #
- [Installation](#Installation)
- [Django](#Django)
  * [Rest Framework](#Rest-Framework)
  * [Channels](#Channels)
- [React.js](#React.js)
  * [Redux](#Redux)
  * [Webpack](#Webpack)
  * [Internationalization](#Internationalization)
  * [Material-ui](#Material-ui)	
  * [React-router](#React-router)
  * [Eslint](#Eslint)

<!-- toc -->

* [live demo](https://django-react-seed.herokuapp.com)

## IMPORTANT
- If serving this application from a non windows server (heroku for example) make sure to remove `pywin32` from Pipfile.
- Change ENVIRONMENT variable in settings/base.py to ENVIRONMENT['production'] before deploying to production.
- Make sure to create .env file in the root directory, with the following variables:
	* SECRET_KEY
	* DB_NAME
	* DB_USER
	* DB_PASSWORD
	* DB_HOST
	* EMAIL_HOST
	* EMAIL_USE_TLS
	* EMAIL_PORT
	* EMAIL_HOST_USER
	* EMAIL_HOST_PASSWORD
	* SERVER_EMAIL
	* DEFAULT_FROM_EMAIL

## Installation

Run `python install.py` from root directory to preform the following tasks automatically:

- *pipenv install*
	* Installs server dependecies
- *pipenv run python manage.py makemigrations*
	* Creates data base migrations
- *pipenv run python manage.py migrate*
	* Make Data base migrations
- *pipenv run python manage.py createsuperuser*
	* Creates a default super user with the following credentials: username: 'admin', password: '1234'
- *npm install*
	* installs node dependencies for both ui apps
- *npm run build*
	* bundles modules for both ui apps
- *pipenv run python manage.py collectstatic*
	* Copy static files from client dist to server staticfiles folder
- *start chrome http://localhost:8000*
	* Opens chrome window on django server default port
- *pipenv run python manage.py runserver*
	* Initiate django server on port 8000
	
## Django

<a href="https://docs.djangoproject.com/en/2.0/" target="_blank">documentation</a>

### Rest Framework

<a href="http://www.django-rest-framework.org/" target="_blank">documentation</a>

### Channels

<a href="https://channels.readthedocs.io/en/latest/" target="_blank">documentation</a>



## React.js

<a href="https://reactjs.org/docs/getting-started.html" target="_blank">documentation</a>

### Redux

<a href="https://redux.js.org/basics/usagewithreact" target="_blank">documentation</a>

### Webpack

<a href="https://webpack.js.org/" target="_blank">documentation</a>

### Internationalization

<a href="https://github.com/i18next/react-i18next" target="_blank">documentation</a>

### Material-ui

<a href="https://material-ui.com/" target="_blank">documentation</a>

### React-router

<a href="https://knowbody.github.io/react-router-docs/" target="_blank">documentation</a>

### Eslint

<a href="https://www.npmjs.com/package/eslint-config-airbnb" target="_blank">documentation</a>
