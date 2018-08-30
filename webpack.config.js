const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']}
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 8080,
    hot: true,
    inline: false,
    overlay: true,
    openPage: '',
    open: true,
  }
}