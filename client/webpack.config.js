"use strict";
let minimize          = process.argv.indexOf('--minimize') !== -1,
    webpack           = require('webpack'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    plugins           = [];

if (process.env.ENV === 'release' || minimize) {
    plugins.push(new webpack.optimize.UglifyJsPlugin());
    plugins.push(new webpack.NoErrorsPlugin());
    plugins.push(new webpack.optimize.DedupePlugin());
}

plugins.push(new webpack.optimize.CommonsChunkPlugin({
    name: ['app', 'vendor', 'polyfills']
}));

plugins.push(new ExtractTextPlugin("bundle.css", {
    allChunks: true
}));

plugins.push(new HtmlWebpackPlugin({
    template: './webpack-bundles/index-template.html',
    hash: true
}));

module.exports = {
    entry:   {
        polyfills: './webpack-bundles/polyfills-bundle',
        vendor:    './webpack-bundles/vendor-bundle',
        app:       "./webpack-bundles/app-bundle",
    },
    output:  {
        path:       __dirname + "/../public",
        publicPath: '/',
        filename:   "[name].js"
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    plugins: plugins,
    module:  {
        loaders: [
            {
                test: /\.ts/, loaders: ['ts-loader'], exclude: /node_modules/
            },
            {
                test:   /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader?minimize!")
            }
        ]
    }
};