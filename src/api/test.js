export const testProxy = () => {
    return axios.request({
        url: '/api/students',
        method: 'get',
    })
}
