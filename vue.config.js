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
