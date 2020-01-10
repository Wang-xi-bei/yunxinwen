<template>
    <div class="container">
        <div class="item" v-for="(item,index) in data " :key="index" :data="item" @click=" getet(item._id)">
            <div class="title">
                <p>
                    <span>{{item.title1}}</span>
                </p>
            </div>
            <div class="pic">
                <img :src="item.pic1"/>
                <img :src="item.pic2"/>
                <img :src="item.pic3"/>
            </div>
            <div class="more">
                <span>
                    <img :src="item.img1" alt="">
                </span>
                <span class="autor" >  
                   {{item.title2}}
                </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'yule',//娱乐
    data(){
        return{
            data:[]
        }        
    },
    mounted(){
        this.$axios({
            url:'/api/yule',
            params:{
                    _limit:10
                }
        }).then(
            res=>{
                // console.log(res)
                this.data=res.data.data
            }
        )
    },
    methods:{
         getet(e){
            this.$router.push("/details/"+e+"?dataName=yule")
         }
     }
}
</script>
<style lang="scss" scoped>
@import '../../common/style/newslist.scss';


</style>