module.exports = {
    // other config
    publicPath: process.env.NODE_ENV === 'production'
    ? '/lthings/'
    : '/',
    productionSourceMap: false
}