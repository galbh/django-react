const path = require('path');

const testHelperPath = path.resolve('test/testHelper.js');
const webpackConfig = require('../webpack.development.config');

module.exports = function karmaConf (config) {
  config.set({

    basePath: 'src',

    // use the PhantomJS browser
    browsers: ['PhantomJS'],

    // use Jasmine
    frameworks: ['jasmine', 'source-map-support'],

    // files that Karma will server to the browser
    files: [
      // entry file for Webpack
      testHelperPath
    ],

    // before serving test/testHelper.js to the browser
    preprocessors: {
      [testHelperPath]: [
        // use karma-webpack to preprocess the file via webpack
        'webpack'
      ]
    },

    webpackMiddleware: {
      // only output webpack error messages
      stats: 'errors-only'
    },

    webpack: {
      devtool: 'inline-source-map', // sourcemap support
      module: { rules: webpackConfig.module.rules },
      plugins: webpackConfig.plugins
    }
  });
};
