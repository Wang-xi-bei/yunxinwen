<template>
    <div class="container">
        <div class="item" v-for="(item,index) of 
        $store.state.finance " :key="index" @click="getfc(item._id)" :data="item" >
            <div class="title">
                <p>
                    <span>{{item.title1}}</span>
                </p>
            </div>
            <div class="pic">
                <img :src="item.pic1"/>
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
import { finance } from "../../store/types";
export default {
    name:'finance',//财经
    data(){
    return{
        // data:[]
    }        
    },
    //请求json数据 每次渲染10个数据
     mounted(){
        //  this.$axios({
        //      url:"/api/caijing",
        //    params:{
        //        _limit:10
        //    }
        //  }).then(
        //      res=>{
        //         //  console.log(res)
        //         //拿到所有数据
        //         this.data=res.data.data
        //      }
        //  )
         this.$store.dispatch(finance)
     },
     //点击时调用这个函数，跳转到详情页面
     methods:{
          getfc(e){
            this.$router.push("/details/"+e+"?dataName=caijing")

          }
     }
}
</script>
<style lang="scss" scoped>
// @import '../../common/style/newslist.scss';
.container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // align-items: center;
    padding-bottom: 1.5rem;
   
  }
  .news {
    display: flex;
    width: 100%;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    margin: 0.15rem 0.3rem 0rem;
    
  }
  .title {
    padding: 0 0;
    flex: 2;
    margin-top:1.2rem;
    font-size:1rem;
  }
  .pic {
    flex:4;
    display: flex;
    justify-content:flex-start;
    align-items: center;
    
  }
  .more {
    flex: 1;
    padding: 0  0.5rem;
    position: relative;
    color: #000;
    border-bottom: 0.1rem solid #BEBEBE;
  }
  .pic img {
    padding: 0 0.1rem;
    flex: 1;
    background-size: contain;
    background-repeat: no-repeat;
    width: 4rem;
    height: 12rem;
  }
  .more span {
    color: #7C7C7C;
    font-size: 0.6rem;
    letter-spacing: 0.1rem;
  }
  
  span img {
    margin-top: 0.3rem;
    width: 1rem;
    height: 1rem;
    border-radius:1rem;
    margin-bottom: 0.5rem;
    // line-height: 2rem;
   
  }
  .more .date {
    position: absolute;
    top: 0.5rem;
    right: 0.3rem;
  }
  a {
    text-decoration: none;
    color: black;
  }
  
</style>