<template>
    <div>
        <div class="title">{{msg}}</div>
        <bar></bar>
        <router-link to="/pageone">pageone</router-link>
        <router-link to="/pagetwo">pagetwo</router-link>
        <!-- 路由匹配到的组件将渲染到这里 -->
        <router-view></router-view>
    </div>
</template>
<script>
import bar from '@/components/bar.vue';
export default {
    name: 'App',
    components: {
        bar
    },
    data() {
        return {
            msg: 'Hello vue'
        }
    }
}
</script>
<style scoped>
    .title {
        margin-top: 100px;
        text-align: center;
        font-weight: bold;
        font-size: 38px;
    }
</style>