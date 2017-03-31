var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var config = {
  devtool: 'eval',
  context: __dirname + '/src',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'js/bundle.[hash].js',
    publicPath: ''
  },
  devServer: {
    contentBase: __dirname + '/src',
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: 'template.html',
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/, //Check for all js files
        use: [{
          loader: 'babel-loader',
        }]
      },
      {
        test: /\.css$/,
        use: [{
            loader: 'style-loader'
        }, {
            loader: 'css-loader'
        }]
      }
    ]
  }
}

// Check if build is running in production mode, then change the devtool
if (process.env.NODE_ENV === 'production') {
  config.devtool = 'source-map'
}

module.exports = config;
