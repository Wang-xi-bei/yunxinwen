<template>
    <div class="core">
        <div class="core-t">
            <img :src="$baseUrl + data.icon" alt=""/>
            <span @click="zx">注销</span>
        </div>
        <div class="core-b">
        </div>
        <ul>
            <li>{{data.nikename}}<i></i></li>
            <li>粉丝：0<i></i></li>
            <li>关注：0<i></i></li>
            <li>收藏：0<i></i></li>
            <li>留言<i></i></li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            data:{}
        }
    },
    beforeRouteEnter(to, from, next) {
      //条件异步
      // 抓取token
      let token = window.localStorage.getItem('token');
      if (token) {
        axios({
          url: '/api/user',
          headers: {
            'token': token
          }
        }).then(
          res => res.data.err == 0 ? next(_this=>_this.data=res.data.data) : next('/login')
        )
      } else {
        next('/login')
      }
    },
    methods:{
        zx(){
            window.localStorage.removeItem('token')
            this.$router.push('/home')
        }
    }


}

</script>
<style>
.core{
    width:100%;
    height:100%;
}
.core ul{
    width:100%;
    height:100%;
    margin-top:16rem;
}
.core ul li{
width:100%;
height:3rem;
font-size:1.3rem;
line-height: 3rem;
text-indent: 1rem;
}
.core ul li:nth-child(1){
    background:#fff;
    font-size:1.3rem;
    margin-bottom:1rem;
}
.core ul li:nth-child(2){
    background:#fff;
    border-bottom: 0.1rem solid #ccc;
}
.core ul li:nth-child(3){
    background:#fff;
    margin-bottom:1rem;
}
.core ul li:nth-child(4){
    background:#fff;
    border-bottom: 0.1rem solid #ccc;
}
.core ul li:nth-child(5){
    background:#fff;
     border-bottom: 0.1rem solid #ccc;
}
.core ul li i{
    display: block;
    width:1rem;
    height:4rem;
    background:url(../../pic/youjian2.png)no-repeat;
    left:21rem;
    top:-2rem;
    position: relative;
}
.core-t{
     width:100%;
    height:15rem;
    position: fixed;
    display:flex;
    left:0;
    top:0;
    background:url(../../pic/beijing2.jpg) no-repeat;
    justify-content: center;
    flex-direction: column;
    align-items:center;
}
.core-t img{
    height:4.2rem;
    width:4.2rem;
    border-radius: 2.1rem;
}
.core-t span{
    color:#ccc;
    font-size:1.2rem;
    /* font-weight: 600; */
    margin-top:0.6rem;
}
.core-b{
      width:100%;
    height:100%;
     background:#ccc;
}

</style>