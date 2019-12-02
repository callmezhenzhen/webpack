<template>
    <div class="bar flex">这是<span class="big">bar</span>组件</div>
</template>
<script>
export default {
    name: 'bar',
    data() {
        return {}
    }
}
</script>
<style lang="less" scoped>
    @import '../assets/style/common.css';
    .bar {
        font-weight: bold;
        font-size: 18px;
        color: red;
        .big {
            color: #000;
            font-size: 24px;
        }
    }
</style>