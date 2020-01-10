<template>

    <div class="container" >
        <div class="item" v-for="(item,index) in data" :key="index" :data="item" @click="getdetail(item._id)">
            <div class="title" >
                <p>
                    <span>{{item.title1}}</span>
                </p>
            </div>
            <div class="pic"  >
                <img :src="item.pic1"/>
                <img :src="item.pic2"/>
                <img :src="item.pic3"/>
            </div>
            <div class="more">
                <span>
                    <img :src="item.img1" alt="">
                </span>
                <span class="autor">  
                    {{item.title2}}
                </span>
            </div>
        </div>
    </div>
</template>
<script>
//头条
export default {
    name:'newslist',
    data(){
        return{
            data:[]
        }
    },
     mounted(){
        this.$axios(
            {
                url:"/api/home",
                params:{
                    _limit:20
                }
            }
        ).then(
            res=>{
                this.data=res.data.data
            }
        )
     },
     methods:{
         getdetail(e){
             this.$router.push("/details/"+e+"?dataName=home")
         }
     }
}
</script>
<style lang="scss" scoped>
@import '../../common/style/newslist.scss';
</style>