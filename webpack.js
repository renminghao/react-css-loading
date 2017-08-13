var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer')
module.exports = {
  context : process.cwd(),
  entry : {
    index : './lib/index.js'
  },
  output : {
    filename : '[name].js',
    path : path.join(process.cwd(),'/dist'),
    publicPath : '/static/',
    libraryTarget : 'umd',
    library : 'webpack'
  },
  externals : {
    'react' : {
      commonjs : 'react',
      commonjs2 : 'react',
      amd : 'react',
      root : 'React'
    },
    'react-dom' : {
      commonjs : 'react-dom',
      commonjs2 : 'react-dom',
      amd : 'react-dom',
      root : 'ReactDOM'
    }
  },
  module : {
    loaders : [
    {
      test : /\.jsx?$/,
      loader : 'babel-loader',
      query : {
        presets : ['es2015','react','stage-1']
      },
      exclude : /node_modules/
    },
    {
      test : /\.less$/,
      loader:  ExtractTextPlugin.extract('css-loader!postcss-loader!less-loader'),
      exclude : /node_modules/
    },
    {
      test : /\.json/,
      loader: 'json-loader!strip-json-comments'
    },
    {
      test:/.(png)|(jpg)$/,
      loader: "url-loader?limit=50000"
    }]
  },
  plugins : [
      new ExtractTextPlugin({
        filename: '[name].css',
        allChunks: true
      }),
      new webpack.ProgressPlugin((percentage, msg) => {
        const stream = process.stderr;
        if (stream.isTTY && percentage < 0.71) {
          stream.cursorTo(0);
          stream.write(`📦   ${msg}`);
          stream.clearLine(1);
        }
      })
  ]
}
