// polyfill PhantomJS environment
import 'babel-polyfill';
import 'whatwg-fetch';

const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });

// require all the test files in the test folder that end with Spec.js or Spec.jsx
const testsContext = require.context('../src', true, /.test.jsx$/);
testsContext.keys().forEach(testsContext);

// output at when the test were run
console.info(`TESTS RAN AT ${new Date().toLocaleTimeString()}`); // eslint-disable-line no-console
