<template>
    <div class="container">
        <div class="item" v-for="(item,index) in data" :key="index" :data="item" @click="getsport(item._id)">
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
                     <img :src="item.img1"/>
                </span>
                <span class="autor">  
                 {{item.title2}}
                </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'newslist',
    data(){
    return{
        data:[]
    }        
    },
      mounted(){
         this.$axios({
             url:"/api/tiyu",
             params:{
                 _limit :10

             }
         }
        ).then(
            res=>{
                // console.log(res)
                this.data=res.data.data
            }
        )
     },
     methods:{
         getsport(e){
             this.$router.push("/details/"+e+"?dataName=tiyu")

         }
     }
}
</script>
<style lang="scss" scoped>
@import '../../common/style/newslist.scss';


</style>