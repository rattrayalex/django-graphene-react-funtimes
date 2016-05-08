
const entry = [
  './src/index',
];
const plugins = [];

module.exports = {
  entry,
  output: {
    filename: 'bundle.js',
    path: '../backend/app/static',
  },
  devtool: 'eval-source-map',
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
