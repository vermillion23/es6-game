const path = require('path');
// const HTMLWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    // plugins: [
    // new HTMLWebpackPlugin({
    //     template: 'index.html',
    //     minify: {
    //         collapseWhitespace: true
    //     }
    // }),
    // new MiniCssExtractPlugin('main.css')
    // ],
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
    // module: {
    //     rules: [{
    //         test: /\.s[ac]ss$/i,
    //         use: [
    //             'style-loader',
    //             { loader: MiniCssExtractPlugin.loader },
    //             'css-loader',
    //             'sass-loader'
    //         ],
    //     }, ],
    // },
};