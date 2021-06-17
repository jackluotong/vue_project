module.exports = {
    lintOnSave: false,
    devServer: {
        proxy: {
            '/dcenter': {
                target: 'http://yang.cn1.utools.club',
                changeOrigin: true,
                // pathRewrite: { '^/api1': '' },
            },
        },
    },
}
