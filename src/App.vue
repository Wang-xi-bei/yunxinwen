<template>
  <div id="app">
    <Login v-show="black" @hide="none" />
    <Logon  v-show="black"/>
    <Header @black="none" v-show="$root.hd"/>
    <Content  v-show="$root.ct"/>
    <Footer v-show="$root.ft"/>
    <router-view/>
  </div>
</template>
<script>
import Header from './components/Header/header.vue'
import Footer from './components/Footer/footer.vue'
import Content from './components/Content/content.vue'
import Home from './components/Home/home.vue'
import My from './components/My/my.vue'
import Login from './components/Login/login.vue'
import Logon from './components/Logon/logon.vue'
import Details from "./components/Details/details.vue"




export default {
  name:'app',
  data(){
    return{
      black:false
    }
  },
  components:{
    Header,Footer,Content,Home,Login,Logon,Details,My
  }
  ,
  methods:{
    none (){
      this.black=!this.black
    },
  },
  watch:{
    $route:{

    handler (val, oldVal) { 
          // console.log(val.path)
          if(/home/.test(val.path)){
            this.$root.hd=true;
            this.$root.ct=true;
            this.$root.ft=true;
              
          }
          if(/details|login|logon|content/.test(val.path)){
            this.$root.hd=false;
            this.$root.ct=false;
            this.$root.ft=false;
            
          }
          if(/my/.test(val.path)){
            this.$root.hd=false;
            this.$root.ct=false;
            this.$root.ft=true;
            
          }
        },
    immediate:true
    }
  }
}



</script>


