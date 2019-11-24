const path = require('path');

module.exports = {
    // 用于解析entry和module.rules.loader选项
    context: path.resolve(__dirname, '../src'),
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                // 结合context选项
                include: '/',
                loader: 'babel-loader'
            }
        ]
    }
};

