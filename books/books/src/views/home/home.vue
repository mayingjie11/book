<template>
    <div class="home">
        <ul class="homeUl">
            <router-link to="/home/shouye" tag="li">首页</router-link>
            <router-link to="/home/ranking" tag="li">分类</router-link>
            <router-link to="/home/classify" tag="li">排行</router-link>
            <router-link to="/home/book" tag="li">书架</router-link>
        </ul>
        <main class="main"><router-view></router-view></main>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .home{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .homeUl{
        width: 100%;
        height: 44px;
        background: #333;
        display: flex;
    }
    .homeUl li{
        flex: 1;
        text-align: center;
        line-height: 44px;
        font-size: 16px;
    }
    .router-link-active{
        background-color: #454545;
        color: #f2f2f2;
    }
    .main{
        flex: 1;
        overflow: auto;
    }
</style>