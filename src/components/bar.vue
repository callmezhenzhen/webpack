<template>
    <div class="bar flex">这是bar组件</div>
</template>
<script>
export default {
    name: 'bar',
    data() {
        return {}
    }
}
</script>
<style scoped>
    @import '../assets/style/common.css';
    .bar {
        font-weight: bold;
        font-size: 18px;
        color: red;
    }
</style>