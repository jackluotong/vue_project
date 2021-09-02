/*
 * @Description:
 * @version: 1.0.0
 * @Author: william
 * @Date: 2021-08-14 16:58:38
 * @LastEditors: william
 * @LastEditTime: 2021-08-14 18:07:15
 * @For What?:
 */
// process.env.NODE_ENV = 'development'
const { resolve } = require('path')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
console.log(process)
module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'index.js',
        path: resolve(__dirname, 'build'),
    },
    module: {
        /* 
            语法检查：eslint-loader eslint
        */
    },
    plugins: [
        new OptimizeCssAssetsWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
}
