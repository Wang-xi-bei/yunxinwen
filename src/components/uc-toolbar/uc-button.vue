<template>
  <div class="footbox">
    <input type="button" :value="text" class="login-btn" />
    <a href="javascript:;" class="tishi">忘记密码？</a>
  </div>
</template>

<script>
  export default {
    data(){return {}},
    props:{
      text:{
        type:String,
        default:'按 钮'
      }
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  
 .footbox {
    width: 6.65rem;
    height: 2.65rem;
    margin: 0 auto;
  }
  
 .login-btn {
    width: 7.65rem;
    height: 2.65rem;
    background: #e23737;
    color: #fff;
    text-align: center;
    line-height: 0.65rem;
    border-radius: 8px;
    display: block;
    margin-top: 1.62rem;
    font-size: 1rem;
  }
  
 .tishi {
    width: 8.4rem;
    font-size: 1rem;
    display: block;
    margin-top:0.4rem;
  }
</style>
