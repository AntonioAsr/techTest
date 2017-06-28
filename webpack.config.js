 var path = require('path');
 var webpack = require('webpack');

 var DIST_DIR = path.resolve(__dirname, 'dist' );
 var SRC_DIR = path.resolve(__dirname, 'frontend' );

 module.exports = {
    entry: SRC_DIR + '/components/hi.js',
    output: {
        path: DIST_DIR + '/app',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015', 'react'],
                 }

             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };