var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var path = require('path');
var env = require('yargs').argv.mode;

var libraryName = 'sparrow';

var plugins = [], outputFile;

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
  outputFile = libraryName + '.min.js';
} else {
  outputFile = libraryName + '.js';
}

var config = {
  entry : {
  	core:['./src/core/core.js',
  		  './src/core/base.js',
  		  './src/core/compMgr.js',
  		  './src/core/BaseComponent.js',
  		  './src/core/end.js',
  		  './src/core/event.js',
  		  './src/core/ajax.js',
  		  './src/utilities/dataRender.js',
  		  './src/utilities/dateUtils.js',
  		  './src/utilities/formater.js',
  		  './src/utilities/hotKeys.js',
 		  './src/utilities/i18n.js',
 		  './src/utilities/jsExtensions.js',
  		  './src/utilities/masker.js',
  		  './src/utilities/rsautils.js',
  		  './src/utilities/ripple.js'
  		 ]
  },
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  },
  plugins: plugins
};

module.exports = config;
