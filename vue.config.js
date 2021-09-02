/*
 * @Description:
 * @version: 1.0.0
 * @Author: william
 * @Date: 2021-06-18 08:43:03
 * @LastEditors: william
 * @LastEditTime: 2021-08-14 17:04:15
 * @For What?:
 */
process.env.NODE_ENV = 'development'
module.exports = {
    lintOnSave: false,
    devServer: {
        port: 3030,
        open: true,
        // proxy: {
        //     '/api': {
        //         target: 'http://localhost:5001',
        //         changeOrigin: true,
        //         pathRewrite: { '^/api1': '' },
        //     },
        // },
    },
}
