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
    template: './index.html',
    hash: true
}));

module.exports = {
    entry:   {
        polyfills: './webpack-bundles/polyfills-bundle',
        vendor:    './webpack-bundles/vendor-bundle',
        app:       "./webpack-bundles/app-bundle",
    },
    output:  {
        path:       __dirname + "/../server/public",
        publicPath: '/',
        filename:   "[name].js"
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    plugins: plugins,
    module:  {
        loaders: [
            {
                test: /\.ts/, 
                loaders: ['ts-loader'], 
                exclude: /node_modules/
            },
            {
                test:   /\.css$/,
                //test:   /\.less$/,
                //loader: "style!css!less?minimize!",
                loader: ExtractTextPlugin.extract("style-loader", "css-loader?minimize!"),
                exclude: /node_modules/
            }
        ]
    }
};