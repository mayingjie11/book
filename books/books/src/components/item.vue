<template>
    <div class="item">
        <div class="item-left">
            <img :src="item.coverUrl"/> 
        </div>
        <div class="item-right">
            <h3>{{item.categoryName}}</h3>
            <p>{{item.bookName}}</p>
            <p>{{item.authorName}}</p>
            <p>{{item.description}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            item:Object
        }
    }
</script>

<style lang="scss" scoped>
    .item{
        width: 100%;
        // height: 130px;
        padding: 10px;
        display: flex;
        font-size: 16px;
        border-bottom:1px solid #cccccc;
    }
    .item-left{
        width: 67px;
        height: 88px;
    }
    .item-right{
        flex: 1;
        padding-left: 5px;
        font-size: 14px;
        width:200px;
        overflow:hidden;
        text-overflow:ellipsis;
        -o-text-overflow:ellipsis;
        white-space:nowrap;
    }
</style>