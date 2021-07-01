module.exports = {
    lintOnSave: false,
    devServer: {
        port: 3030,
        open: true,
        proxy: {
            '/dcenter': {
                target: 'http://yang.cn1.utools.club',
                changeOrigin: true,
                // pathRewrite: { '^/api1': '' },
            },
        },
    },
}
