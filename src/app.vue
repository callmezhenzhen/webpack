<template>
    <div>
        <div class="title">{{msg}}</div>
        <bar></bar>
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