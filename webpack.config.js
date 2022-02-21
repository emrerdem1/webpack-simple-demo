const path = require('path');
const glob = require('glob');

module.exports = {
  entry: {
    'bundle-demo': glob
      .sync('./src/*.?(js|css)')
      .map((f) => path.resolve(__dirname, f)),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};
