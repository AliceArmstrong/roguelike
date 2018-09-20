// Standard lib.
// const path = require('path')
// Package modules.
const webpack = require('webpack');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: './dist/app.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                options: {
                    formatter: require('eslint-friendly-formatter'),
                },
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                    },
                },
            },
        ],
    },
    mode: 'development',
    watch: true,
    devServer: {
        noInfo: true,
    },
};
