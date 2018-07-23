from subprocess import call
import os

# Paths
dir_path = os.path.dirname(os.path.realpath(__file__))

# Available commands
pipinstall = 'pipenv install'
manage = 'pipenv run python manage.py '
makemigrations = manage + 'makemigrations'
migrate = manage + 'migrate'
collectstatic = manage + 'collectstatic --noinput'
access_core_ui_folder = 'cd frontend/core-app'
access_root_folder = 'cd ' + os.getcwd()
npm_install = 'npm i'
npm_build = 'npm run build'
run_django_server = manage + 'runserver'
run_chrome = 'start chrome "http://localhost:8000"'

# add additional commands to this list
commands = [
    pipinstall,
    makemigrations,
    migrate,
    access_core_ui_folder,
    npm_install,
    npm_build,
    access_root_folder,
    collectstatic,
    run_chrome,
    run_django_server,
]


def extract_command_string(commands_list):
    string_command = ''

    for index in range(len(commands_list)):
        command = commands_list[index]
        if index < len(commands_list) - 1:
            string_command += command + ' && '
        else:
            string_command += command

    return string_command


call(extract_command_string(commands), cwd=dir_path, shell=True)
