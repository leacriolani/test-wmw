/* eslint-disable */

// Configuration file for all things Slate.
// For more information, visit https://github.com/Shopify/slate/wiki/Slate-Configuration

const path = require('path');

module.exports = {
  'webpack.extend': {
    resolve: {
      alias: {
        'lodash-es': path.resolve('./node_modules/lodash-es'),
      },
    },
  },
};