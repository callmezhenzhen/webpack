const path = require('path');
const webpack = require('webpack');

webpack({
    /**
     * 入口配置
     */
    entry: {
        app: './main.js'
    },
    
    /**
     * 输出配置
     */
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    }
},
(err, status) => {
    if (err || status.hasErrors()) {
        console.log('unkwone errors occared')
    }
});