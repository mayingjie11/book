<template>
    <div>
        {{this.$route.query.id}}
    </div>
</template>

<script>
import '@/mock/index'
export default {
    data(){
        return {
            detailsList:[]
        }
    },
    created(){
        // fetch('/api/data').then(res => res.json()).then(res => {
        //     console.log(res)
        // })
        this.$http.get(`/api/dataa`).then(res => {
            console.log(res.data.list.ranklist0)
            // this.detailsList= res.data.list[ranklist0].filter(item => item.bookId == this.$route.query.id)
        })
    },
    methods:{

    }
}
</script>

<style>

</style>