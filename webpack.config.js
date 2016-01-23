var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, '/static/dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      include: path.join(__dirname, 'src'),
      loaders: ['react-hot', 'babel']
    }]
  }
}

// entry: './src/index',
// output: {
//   path: './static/dist',
//   filename: "bundle.js"
// },
// plugins: [
//   new webpack.optimize.UglifyJsPlugin({
//     compress: {
//       warnings: false
//     }
//   })
// ],
// module: {
//   loaders: [{
//     test: /\.jsx?$/,
//     exclude: /(node_modules)/,
//     loader: 'babel'
//   }, {
//     test: /\.scss$/,
//     loaders: ['style', 'css', 'sass']
//   }]
// }

// , {
//   test: /\.scss$/,
//   loader: 'style!css!sass'
// }, {
//   test: /\.json$/,
//   loader: 'json'
// }
