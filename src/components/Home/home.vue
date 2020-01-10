<template>
  <div class="home">
    <h3></h3>
   <router-view/>
  </div>
</template>

<script>
  export default {
    methods:{
      gogo(){
        // this.$router.push('/login')
        // this.$router.push({path:'/login'})
        // this.$router.push({name:'detail',params:{id:5},query:{a:55,b:555}})
        // this.$router.replace({name:'detail',params:{id:5},query:{a:55,b:555}})
        // this.$router.push('/register')  跳转是指向别名
        this.$router.push({path:'/register'}) //别名扩展path
      }
    }
  }
</script>

<style scoped>
.home{
  margin-top:4rem;
}
</style>
