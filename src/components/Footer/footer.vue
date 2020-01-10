<template >
    <div class="tab">
      <div class="home option" >
        <i ></i>
        <router-link to="/home/newlist" tag="a" active-class="active">首页</router-link>
        <!-- <a>首页</a> -->
      </div>
      <div class="Focus option" >
          <i ></i>
        <router-link to="/home/entertainment" tag="a" active-class="active">要闻</router-link>
         <!-- <a>要闻</a> -->
      </div>
      <div class="radio option" >
        <i ></i>
        <router-link to="/home/sports">智能室 </router-link>
         <!-- <a>智能室</a> -->
      </div>
      <div class="my option"  >
         <i ></i>
        <router-link to="/my" tag="a" active-class="active">我</router-link>
         <!-- <a>我</a> -->
      </div>
    </div>

</template>
<script>
export default {
    data (){
        return{}
    },
}
</script>
<style lang="scss" scoped>
.tab {
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  height: 3rem;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 3;
  background-color: white;
  border-top: 0.1rem solid #F3F3F3;
  margin:0;
  padding:0;
    .home  i{
    background:url(../../pic/home_1.png)no-repeat;
    background-size:cover; 
    &.active{
      background:url(../../pic/home_2.png)no-repeat;
      background-size:cover; 
    }
    
  }
  .Focus i{
    background:url(../../pic/focus_1.png)no-repeat;
    background-size:cover; 
  }
  .radio i{
    background:url(../../pic/radio_1.png)no-repeat;
    background-size:cover; 
  }
  .my i{
    background:url(../../pic/my_1.png)no-repeat;
    background-size:cover; 
  }
    .option {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    text-align: center;
        a {
      color: #747474;
      text-decoration: none;
      font-size: 1rem;
      &.active{
      color:red;
      }
    }
      i {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
}





</style>