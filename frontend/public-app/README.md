## Table of Contents

- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [node server/run-node-server.js](#run-node-server)
  - [python server/run_servers.py](#run_servers)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br>

### `npm test`
runs karma with --single-run for production CI environment.
In order to run tests in development with watch configuration:
1. npm install -g karma-cli
2. npm run test:local
Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `node server/run-node-server.js`

run node server on localhost port 3000, this server serves the compiled files from dist as well as the rest api.

### `python server/run_servers.py`

runs both the node server on port 3000 and webpack-dev-server on port 8080