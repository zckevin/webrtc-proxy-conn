const { merge } = require('webpack-merge');
const configs = require('./webpack.common.cjs');

module.exports = configs.map((config) =>
  merge(config, {
    mode: 'production',
    optimization: {
      minimize: true,
    },
  })
);
