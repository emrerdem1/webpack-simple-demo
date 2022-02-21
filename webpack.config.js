const path = require('path');
const glob = require('glob');

module.exports = {
  entry: {
    'bundle.js': glob
      .sync('./src/*.?(js|css)')
      .map((f) => path.resolve(__dirname, f)),
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
