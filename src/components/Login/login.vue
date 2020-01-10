<template>
    <div class="lg" @click.self="$emit('hide')">
        <div class="lg-l">
            <div class="dl">
                <!-- <input type="text" value="" placeholder="请输入账号"/>
                <input type="text" value=""  placeholder="请输入密码"/> -->
                <uc-input label="账号" v-model="username"/>
                 <uc-input label="密码" v-model="password"/>
                 <uc-button text="登录" @click.native='login'/>
                  

                 <br>
               
                <routerLink class="a2" tag="a" to="/logon" @click.native.self="$emit('hide')">去注册</routerLink> 
               {{mess}}
                <p>使用<a>网易账号管家,</a>全面保护您的账户！</p>
                <!-- <input type="button" value="登录" class="btn"/> -->

                <span>
                 <!-- <a class="a1">去注册</a> -->
               
                
                </span>
            </div> 
            <div class="dl-t">
                <p>社交账号登录</p>
                 <img src="../../pic/qq.png"/>
                 <img src="../../pic/weibo.png"/>
            </div>
            
        </div>
        <div class="no"></div>
    </div>
</template>
<script>
import UcNav from '../uc-nav/uc-nav.vue'
import UcButton from '../uc-toolbar/uc-button.vue'
import UcInput from '../uc-toolbar/uc-input.vue'
 export default {
    data() {
      return {
        username: '',
        password: '',
        mess:''
      }
    },
    components: {
      UcNav,
      'uc-button': UcButton,
      'uc-input': UcInput,
    },
    mounted() {},
    updated() {},
    methods: {
      login() {
        // alert(1)
        let params = new URLSearchParams();
        params.append('username', this.username)
        params.append('password', this.password)
        console.log(this.username)
        this.$axios({
          url: '/api/login',
          method: 'post',
          data: params
        }).then(
          res => {
            if(res.data.err==0){
              //种token,跳转user
              console.log(res.data)
              window.localStorage.setItem('token',res.data.token);
              this.$router.push('/my')
            }else{
              console.log(res.data)
              this.mess=res.data.msg
            }
          }
        )
        
      }
    }
  }
</script>
<style>
.lg{
    width:200%;
    height:200%;
    position:fixed;
    left:0;
    top:0;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    z-index:1001;
    /* display:none; */
    
}
.lg:before{
    content: " ";
    display: block;
    position: absolute;
    background-color: rgba(0,0,0,.8);
     width:200%;
    height:200%;

}
.lg-l{
    width:15.2rem;
    height:100%;
    background:#fff;
    position: fixed;
    z-index:1002;
}
.lg-l .dl{
    width:12rem;
    height:15rem;
    /* border:1px solid #ccc; */
    margin:1rem auto;
}
/* .lg-l   .dl input{
    width:12rem;
    height:2rem;
    border:0.1rem solid #ccc;
    margin-top:1.2rem;
   text-indent: 1rem;
   border-radius: 0.4rem;

} */
.lg-l   .dl .btn{
    background:brown;
    color:#fff;
    text-align:center;
    text-indent: 0rem;
    border:0;
    border-radius: 4px;
    margin-bottom:1.2rem;
}
.lg-l .dl p{
    margin-top:2.2rem;
    font-size:0.9rem;
   
}
.lg-l .dl p a{
    color:rgb(79, 79, 182);
}
.lg-l .dl .ps{
    margin-left:4rem;
}

.lg-l .dl span a{

    margin:4rem;

}
.lg-l .dl-t{
   width:12rem;
    height:9rem;
    border-top:.1rem solid #ccc;
    margin:6rem auto;
    border-bottom:.1rem solid #ccc;
} 
.lg-l .dl-t p{
    text-align: center;
    margin: -.50rem auto 0;
    background:#fff;
    line-height: 1;
    width: 50%;
    font-size:0.7rem;
    color:rgb(120, 120, 124);
}
.lg-l .dl-t img{
    width:2.5rem;
    height:2.5rem;
    margin-left:2.3rem;
    margin-top:2rem;
    text-align: center;
}
.no{
position: fixed;
right:0;
top:0;
bottom: 0;
width:auto;
    height:100%;
}

</style>