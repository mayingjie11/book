
<template>
    <div class="Ranking">
        <div class="Ranking-nav">
            <div :class="'Ranking-nav-list ' + (curIndex === index ? 'active' : '')" v-for='(item,index) in navList' :key='index' @click="clickCurIndex(index)">{{item}}</div>
        </div> 
        <div class="content">
            <Item v-for="(item,index) in newList" :key="index" :item="item" ></Item>
        </div>
        
    </div>
</template>

<script>
    import Item from '@/components/item'
    import "@/mock/index.js"
    export default {
        data(){
            return {
                navList:['热门','新书','免费','完本'],
                curIndex:0,
                newList:[],
                list:{}
            }
        },
        components:{
            Item
        },
        created(){
            this.$http.get('/api/data').then(res => {
                this.list =res.data.list
                this.newList = res.data.list.ranklist0;
            })
        },
        methods:{
            clickCurIndex(index){
                this.curIndex=index
                this.newList = this.list["ranklist"+index]
               
            }
        }
    }
</script>

<style lang="scss" scoped>
    .Ranking,content{
        width: 100%;
        height: 100%;
    }
    .Ranking-nav{
        width: 100%;
        height: 44px;
        padding: 5px 10px;
        display: flex;
    }
    .Ranking-nav-list{
        flex: 1;
        text-align: center;
        color: #4c4c4c;
        border-radius: 3px;
        height: 35px;
        line-height: 35px;
        font-size: 13px;
        background: #f2f2f2;
        margin: 5px;
    }
    .active{
        background: red;
        color: #ffffff;
    }
</style>