# Django - React.js #
- [Installation](#Installation)
- [Development](#Development)
- [Deployment](#Deployment)
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

- Before running install.py make sure to create .env file in the root directory.
    * here's a [link](https://github.com/galbh/dotfiles/blob/master/.env) to an example .env file. 
    * All variables are required for production environment.
    * For development environment only SECRET_KEY is required.

<a id="Installation">

## Installation

Run `python install.py` from root directory to preform the following tasks automatically:

- `pipenv install`
	* Installs server dependecies
- `pipenv run python manage.py makemigrations`
	* Creates data base migrations
- `pipenv run python manage.py migrate`
	* Make Data base migrations
- `pipenv run python manage.py createsuperuser`
	* Creates a default super user with the following credentials: username: 'admin', password: '1234'
- `npm install`
	* installs node dependencies for both ui apps
- `npm run build`
	* bundles modules for both ui apps
- `pipenv run python manage.py collectstatic`
	* Copy static files from client dist to server staticfiles folder
- `start chrome http://localhost:8000`
	* Opens chrome window on django server default port
- `pipenv run python manage.py runserver --insecure`
	* Initiate django server on port 8000


<a id="Development">

## Development

- Run `pipenv run python manage.py runserver --insecure` from root directory to run django developement server.
- Run `python run_servers.py` from any of the frontend ui apps to run node development servers.
- Frontend application are a clone of this repository: https://github.com/galbh/react-starter

<a id="Deployment">


## Deployment

- Change ENVIRONMENT variable in settings/base.py to ENVIRONMENT['production'].
- Add your host to ALLOWED_HOSTS in settings/production.py.
- If serving this application from a non windows machine make sure to remove `pywin32` from Pipfile.
- Heroku deploy requires both python and node.js buildpacks:
    * Set manually in Heroku ui or cli.
    * Node comes first so server can collect static files.
- Before deploying to Heroku make sure to set config vars (same as .env described above).


<a id="Django">

## Django

<a href="https://docs.djangoproject.com/en/2.0/" target="_blank">documentation</a>


<a id="Rest-Framework">

### Rest Framework

<a href="http://www.django-rest-framework.org/" target="_blank">documentation</a>


<a id="Channels">

### Channels

<a href="https://channels.readthedocs.io/en/latest/" target="_blank">documentation</a>


<a id="React.js">

## React.js

<a href="https://reactjs.org/docs/getting-started.html" target="_blank">documentation</a>


<a id="Redux">

### Redux

<a href="https://redux.js.org/basics/usagewithreact" target="_blank">documentation</a>


<a id="Webpack">

### Webpack

<a href="https://webpack.js.org/" target="_blank">documentation</a>


<a id="Internationalization">

### Internationalization

<a href="https://github.com/i18next/react-i18next" target="_blank">documentation</a>


<a id="Material-ui">

### Material-ui

<a href="https://material-ui.com/" target="_blank">documentation</a>


<a id="React-router">

### React-router

<a href="https://knowbody.github.io/react-router-docs/" target="_blank">documentation</a>


<a id="Eslint">

### Eslint
<a href="https://www.npmjs.com/package/eslint-config-airbnb" target="_blank">documentation</a>
