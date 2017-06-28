 var path = require('path');
 var webpack = require('webpack');

 var DIST_DIR = path.resolve(__dirname, 'dist' );
 var SRC_DIR = path.resolve(__dirname, 'frontend' );

 module.exports = {
    entry: SRC_DIR + '/components/Lesson.jsx',
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
                 test: /\.jsx?$/,
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