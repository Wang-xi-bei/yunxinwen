<template>
  <div class="nav" :style="{
    'background':bgColor,
    'border-width':borderWidth+'px',
  }">
  
  <!-- 模板的作用与和this/component/vm 是同作用域，不和模块同作用域 -->
  
    <!-- onclick="window.history.go(-1)" -->
  
    <ul>
      <li
       :class="`l-btn ${ arrow === 'gray' ? 'gray' : 'default'}`"
       @click="goback"
       
      ></li>
    </ul>
  </div>
</template>

<script>

  
  
  export default {
    data() {
      return {
      }
    },
    props: {
      bgColor: {
        type: String,
        default: '#fff'
      },
      borderWidth: {
        type: Number,
        default: 1
      },
      arrow: {
        type: String,
        default: 'default'
      }
    },
    components: {},
    mounted() {},
    updated() {},
    methods: {
      goback(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .nav {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    border-bottom: 1px solid #e8eaec;
    z-index: 99;
  }

  .nav ul {
    width: 6.4rem;
    height: 0.45rem;
    padding-top: 0.15rem;
    margin: 0 auto;
  }

 .nav ul li {
    width: 0.29rem;
    height: 0.31rem;
    background-size: 100%;
    margin: 0 0 0 0.38rem;
    /* background: url(./assets/history1.png) no-repeat 0 0; */
  }
  
  .nav ul li.gray{
    background-image: url(./assets/history1.png)
  }
  
  .nav ul li.default{
    background-image: url(./assets/history.png)
  }
</style>
