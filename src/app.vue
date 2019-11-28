<template>
    <div class="title">{{msg}}</div>
</template>
<script>
export default {
    name: 'App',
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