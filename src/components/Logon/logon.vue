<template>
    <div class="log">
        <div class="log-t">
            <div class="head">
                <i @click="fh()"></i>
                <h4>欢迎注册云新闻</h4>
            </div>
            <div class="ipt">
             <!-- <input type="text" value="" placeholder="6-18数字字母组合"/>
             <span></span>
             <input type="text" value="" placeholder="8-16位数字字母字符组合密码"/>
             <span></span>
             <input type="button" value="注册" class="btn"/>
            </div> -->
            <uc-input label="昵称" v-model="nikename"/>
            <uc-input label="账号" v-model="username"/>
            <uc-input label="密码" v-model="password"/>
           
        </div>
         <uc-button text="注册" @click.native="reg"/>

        
    </div>
    </div>
</template>
<script>
import UcNav from '../uc-nav/uc-nav.vue'
import UcButton from '../uc-toolbar/uc-button.vue'
import UcInput from '../uc-toolbar/uc-input.vue'
export default {
    data(){
        return{
        username: '',
        password: '',
        mess: '',
        nikename:''
        }
    },
     components: {
      UcNav,
      'uc-button': UcButton,
      'uc-input': UcInput,
    },
    methods: {
         fh(e){
            this.$router.push('home/newlist')

        },
      reg() {
        let formData = new FormData();
        formData.append('username',this.username)
        formData.append('password',this.password)
        formData.append('nikename',this.nikename)
        this.$axios({
            url: '/api/reg',
            method: 'post',
            data: formData
        }).then(
          res => {
            if(res.data.err==0){
              console.log(res.data);
              this.$router.push('/login')
            }else{
              this.mess=res.data.msg
            }
          }
        )
        
      }
    }
    
}
</script>
<style soped>
.log{
    width:100%;
    height:100%;
    display:block;
}

.log .log-t .head{
    width:100%;
    height:3rem;
    background:crimson;
}
.log .log-t .head i{
display:block;
    background:url(../../pic/history1.png)no-repeat;
    background-size: contain;
    width:1.2rem;
    height:1.2rem;
    left:1rem;
    top:1rem;
    position: relative;
}
.log .log-t .head h4{ 
    text-align: center;
    color:#fff;
    line-height: 1rem;
    font-size:1.2rem;


}
.log .log-t .ipt{
    margin-top:5rem;
} 
/* .log .log-t .ipt input{
    display: block;
    margin:0 auto;
    width:15rem;
    height:3rem;
    text-indent: 0.5rem;
    border:0.1rem solid #ccc;
    margin-top:0.3rem;
    border-radius: 0.4rem;
    margin-top:0.8rem;

}
.log .log-t .ipt span{
    display:block;
    text-align: center;
}
.log .log-t .btn{
    background:brown;
    color:#fff;
    font-size:1.2rem;
} */ 


</style>