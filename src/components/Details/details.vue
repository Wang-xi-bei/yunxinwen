<template>
    <div class="data" v-if="dd.detail" >
        <div class="header">
            <i class="jt" @click="tz"></i>
            <h2>云新闻</h2>
            <i class="dd"></i>
        </div>

        <div class="data-t"   >
            <h3>{{dd.title1}}</h3>
            <span>{{dd.title2}}</span>
             <!-- <img :src="dd.img2"/> -->
           
        </div>
        <div class="content" v-html="dd.detail.data">
        </div>

    </div>
</template>
<script>
export default {
    name:"detail",
    data(){
        return{
            dd:{}
        }
    },
    mounted(){
        this.$axios({
            url:"/api/"+this.$route.query.dataName+"/"+this.$route.params._id
        }).then(
            res =>{
                this.dd = res.data.data
                // console.log(this.dd)
            }
        )
    },
    methods:{
        tz(e){
            // console.log(1)
            this.$router.go(-1)
        }
    },
    updated(){
        let aImg = document.querySelectorAll("#article_content img")
        let content = document.querySelector("#article_content")
        let ap = document.querySelectorAll("#article_content p")
        aImg.forEach((item)=>{
            item.style.width = '100%';
            item.style.height = '100%';
            item.style.margin = "0 auto";
            item.style.marginTop = ".24rem";
            item.style.marginBottom = ".24rem";
        })
        ap.forEach((item)=>{
          
        })
    }
}
</script>
<style scoped>
.content{
    width:100%;
    height:100%;
    font-size:1.2rem;
    margin-top:2rem;
    box-sizing: border-box;
    line-height: 1.5;
}
.data{
    width:100%;
    height:100%;
}
.data .header{
    position:fixed;
    width:100%;
    height:3rem;
    background:#BE0122;
    left:0;
    top:0;
   
}
.data .header .jt{
    display:block;
    background:url(../../pic/history1.png)no-repeat;
    background-size: contain;
    width:1.2rem;
    height:1.2rem;
    left:1rem;
    top:1rem;
    position: relative;
}
.data .header  h2{
    text-align: center;
    color:seashell;
    line-height: 1rem;
}
.data .data-t{
    border-bottom:0.1rem solid #ccc;

}
.data .data-t h3{
    margin-top:7rem;
    font-size:1.2rem;
    margin-left:1rem;
}
.data .data-t span{
    font-size:0.8rem;
    color:rgb(56, 54, 54);
    margin:0.4rem 0;
    display:inline-block;
     margin-left:1rem;
}

  



</style>