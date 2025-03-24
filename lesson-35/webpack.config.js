const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js',
        stat: './src/statistics.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].bundle.js',
    },
    target: 'web',
    devServer: {
        port: 4200,
        hot: false
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/index.html'),
            title: 'My super Project - Main!',
            chunks: ['main', 'stat']
        }),
        new HTMLWebpackPlugin({
            filename: 'about.html',
            template: path.resolve(__dirname, 'src/about.html'),
            title: 'My super Project - About!',
            chunks: ['main', 'stat']
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets/icon.png'),
                    to: path.resolve(__dirname, 'dist'),
                }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif|webp)$/,
                type: 'asset/resource'
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                type: 'asset/resource'
            }
        ]
    }
};

