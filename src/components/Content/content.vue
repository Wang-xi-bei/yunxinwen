<template>
    <div class="container">
    <div class="tab" >
      <div  class="headlines type" ><router-link to="/home/newlist" tag="a" active-class="active">头条</router-link></div>
      <div class="entertainment type"><router-link  to="/home/entertainment" tag="a" active-class="active">娱乐</router-link></div>
      <div class="pe type"><router-link to="/home/sports" tag="a" active-class="active">体育</router-link></div>
      <div class="Finance type"><router-link to="/home/finance" tag="a" active-class="active">财经</router-link></div>
      <!-- <div class="science type"><router-link to="/home/science" tag="a" active-class="active">科技</router-link></div> -->
      <!-- <div  class="Military type"><router-link to="/home/politics" tag="a" active-class="active">军事</router-link></div> -->
    </div>
    <div class="talk ">
      <div class="headlines type"><router-link to="/" tag="a" active-class="active"></router-link></div>
      <div class="entertainment type"><router-link to="/" tag="a" active-class="active"></router-link></div>
    </div>
    <div class="fill"></div>

    <!-- <div class="news" >
        <div class="loading">
          <i class="icon-loading"></i>
        </div>
    </div> -->

  </div>
</template>
<script>
export default {
    data(){
        return{}
    },
}

</script>
<style lang="scss" scoped>
.container{
  width:100%;
  height:2rem;
  position: fixed;
   background:#fff;
   z-index: 999;

  .tab{
    width:100%;
    height:2rem;
    position: fixed;
    display:flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    top:3.5rem;
    padding-top:0.2rem;
    background:#fff;
    line-height: 2rem;
    
  .type{
    flex:1;
    letter-spacing: 0.2rem;
    text-align:center;
    position: relative;
    z-index: 1;
    
    }
  }

  a{
    font-size:1rem;
    &.active{
      color:brown;
      font-size:1.2rem;
    }
  
    
  }
}
// .isBorder{
//   padding-bottom:2px;
//   border-bottom:2px solid red;
//   font-size:18px;
//   color:red;
// }

</style>