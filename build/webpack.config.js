const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 用于解析entry和module.rules.loader选项
    context: path.resolve(__dirname, '../src'),
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[chunkhash].bundle.js'
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
            title: 'learning webpack',
            filename: 'index.html'
        })
    ]
};

