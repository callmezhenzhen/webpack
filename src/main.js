// 引入vue
import Vue from 'vue';
import App from '@/app';

// 创建vue根实例
new Vue({
    el: '#app',
    template: '<App></App>',
    components: {App},
    data: {
        msg: 'hello'
    }
});
