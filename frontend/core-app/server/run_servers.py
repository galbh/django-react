from subprocess import call
import subprocess
import time
import os

dir_path = os.path.dirname(os.path.realpath(__file__))


# run node server

# command to run npm server
node_cmdline = "npm start"
process = subprocess.Popen("start cmd /K " + node_cmdline, cwd=dir_path, shell=True)
process.wait()
time.sleep(3)

# run node server

# command to run node server
cmdline = "node run-node-server.js"

rc = call("start cmd /K " + cmdline, cwd=dir_path, shell=True)
