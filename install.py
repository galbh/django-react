from subprocess import call
import os

# Paths
dir_path = os.path.dirname(os.path.realpath(__file__))

# Available commands
install_pipenv = 'pip install pipenv'
pipinstall = 'pipenv install'
manage = 'pipenv run python manage.py '
makemigrations = manage + 'makemigrations'
migrate = manage + 'migrate'
collectstatic = manage + 'collectstatic --noinput'
access_core_ui_folder = 'cd ' + os.path.join(dir_path, 'frontend', 'core-app')
access_public_ui_folder = 'cd ' + os.path.join(dir_path, 'frontend', 'public-app')
access_root_folder = 'cd ' + os.getcwd()
npm_install = 'npm i'
npm_build = 'npm run build'
run_django_server = manage + 'runserver --insecure'
run_chrome = 'start chrome "http://localhost:8000"'
create_super_user = "echo from backend.accounts.models import UserProfile; " \
                    "from django.contrib.auth.models import User; " \
                    "created_user = User.objects.create_superuser('admin', 'admin@mail.com', '1234'); " \
                    "UserProfile.objects.create(user=created_user, full_name=created_user.username) " \
                    "| pipenv run python manage.py shell"

commands = [
    install_pipenv,
    # install server dependencies
    pipinstall,
    # migrate data base
    makemigrations,
    migrate,
    create_super_user,
    # install and build ui core app
    access_core_ui_folder,
    npm_install,
    npm_build,
    # install and build ui public app
    access_public_ui_folder,
    npm_install,
    npm_build,
    # copy static files to server
    access_root_folder,
    collectstatic,
    # run django development server
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
