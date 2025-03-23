const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: {
        main: './src/index.js',
        stat: './src/statistics.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].bundle.js',
    },
    plugins: [
        new HTMLWebpackPlugin({ template: './src/index.html' }),
        new CleanWebpackPlugin()
    ]
};

