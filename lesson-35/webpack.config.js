const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

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
    devtool: isProd ? false : 'source-map',
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
            chunks: ['main']
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './src/faficon.png'),
                    to: path.resolve(__dirname, 'dist'),
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new EslintWebpackPlugin({
            extensions: ['js'],
            fix: true,
            configType: 'eslintrc'
        })
     ],

    module: {
        rules: [
            {
                test: /\.s[ac]ss/,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif|webp)$/,
                type: 'asset/resource'
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                type: 'asset/resource'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-typescript'
                        ]
                    }
                }
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
        minimizer: [
            new TerserPlugin()
        ]
    }
};

