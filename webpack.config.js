/*eslint-disable no-undef, no-unused-vars*/
const { resolve } = require('path')
const webpack = require('webpack')

var entry = [
  './index.js'
]

if(process.env.webpack == 'dev'){
  entry.unshift('webpack-dev-server/client?http://localhost:8080', 'webpack/hot/only-dev-server')
}
entry.unshift('babel-polyfill')

var plugins = [
  new webpack.optimize.UglifyJsPlugin({minimize: true})
]

if(process.env.webpack == 'dev'){
  plugins = [
    // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),
    // activates HMR
    new webpack.HotModuleReplacementPlugin()
  ]
}

var devtool = ''
if(process.env.webpack == 'dev'){
  devtool = 'inline-source-map'
}

module.exports = {
  entry: './index.js',

  output: {
    filename: 'index.js',
    path: __dirname + '/dist'
  },

  externals: { },

  context: resolve(__dirname, 'src'),

  devtool: devtool,

  module: {
    loaders: [
      { 
        test: /\.js$/,
        loaders: ['babel-loader'],
        // include: resolve(__dirname, 'src'),
        exclude: /node_modules/
      },
      {
        test: /\.scss$/
      }
    ]
  },

  plugins: plugins,
}
/*eslint-disable no-undef, no-unused-vars*/
