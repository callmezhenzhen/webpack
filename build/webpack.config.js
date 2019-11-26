const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 用于解析entry和module.rules.loader选项
    context: path.resolve(__dirname, '../src'),
    // 入口配置
    entry: './main.js',
    // 输入配置
    output: {
        path: path.resolve(__dirname, '../dist'),
        // 文件名前面挂上hash
        filename: '[chunkhash].bundle.js'
    },
    devServer: {
        // 给server提供内容的目录
        contentBase: path.resolve(__dirname, '../dist'),
        // 启动gzip压缩
        compress: true,
        // 端口号
        port: 9000
    },
    // loaders
    module: {
        rules: [
            {
                test: /\.js$/,
                // 结合context选项
                include: '/',
                loader: 'babel-loader'
            }
        ]
    },
    // plugins
    plugins: [
        new htmlWebpackPlugin({
            // 页面title
            title: 'learning webpack',
            // 指定模版
            template: 'index.html'
        })
    ]
};

