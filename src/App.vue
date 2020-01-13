<template>
  <div id="app">
    <loading v-show="$store.state.bLoading"/>
    <Login v-show="black" @hide="none" />
    <Logon  v-show="black"/>
    <Header @black="none" v-show="$store.state.hd"/>
    <Content  v-show="$store.state.ct"/>
    <Footer v-show="$store.state.ft"/>
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
import Loading from './components/Loading/loading.vue'
import {HD,FT,CT,BLOADING} from './store/types'



export default {
  name:'app',
  data(){
    return{
      black:false
    }
  },
  components:{
    Header,Footer,Content,Home,Login,Logon,Details,My,Loading
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
            // this.$root.hd=true;
            // this.$root.ct=true;
            // this.$root.ft=true;
            this.$store.commit(HD,true)
            this.$store.commit(FT,true)
            this.$store.commit(CT,true)
              
          }
          if(/details|login|logon|content/.test(val.path)){
            // this.$root.hd=false;
            // this.$root.ct=false;
            // this.$root.ft=false;
            this.$store.commit(HD,false)
            this.$store.commit(FT,false)
            this.$store.commit(CT,false)
            
          }
          if(/my/.test(val.path)){
            // this.$root.hd=false;
            // this.$root.ct=false;
            // this.$root.ft=true;
            this.$store.commit(HD,false)
            this.$store.commit(FT,true)
            this.$store.commit(CT,false)
            
          }
        },
    immediate:true
    }
  }
}



</script>


