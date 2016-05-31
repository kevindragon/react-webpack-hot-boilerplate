var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  context: path.join(__dirname, "/"),
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    APP_DIR + '/index.jsx'
  ],
  output: {
    publicPath: "/public/",
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: "./src/client/",
    inline: true,
    hot: true, 
    port: 8080
  },
  module : {
    loaders : [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
};

module.exports = config;
