const webpack = require('webpack');

const PORT = 9997;

const entry = [
  './src/index',
];
const plugins = [];

// include hot reload stuff only in development
if (process.env.NODE_ENV !== 'production') {
  entry.push(`webpack-dev-server/client?http://0.0.0.0:${PORT}`);
  entry.push('webpack/hot/only-dev-server');
  plugins.push(new webpack.HotModuleReplacementPlugin());
}


module.exports = {
  entry,
  output: {
    filename: 'bundle.js',
    path: './dist',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css',
      },
    ],
  },
  plugins,
};
