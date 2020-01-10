<template>
    <div class="uc-input">
        <input type="text" :value="value" @input="$emit('input',$event.target.value)"/>
        <span>{{label}}</span>
    </div>
   
</template>
<script>
export default {
    data(){return{}},
    props:{
        value:{
            type:String,
            default:''
        },
        label:{
            type:String,
            default:"标题"
        }
    }
   
}


</script>
<style scoped>

  .uc-input {
    /* height: 0.95rem; */
    position: relative;
    /* border-bottom: 1px solid #e5e7e8; */
    
    width: 13rem;
    height: 3rem;
    border: 1px solid #e5e7e8;
    background: #fff;
    margin: 0 auto;
    margin-top: 0.68rem;
    border-radius: 0.5rem;
    
  }
  
  .uc-input input {
    padding-left: 2.3rem;
    width: 4.54rem;
    height: 100%;
    font-size: 1rem;
  }
  
  .uc-input span {
    width: 2.23rem;
    height: 3rem;
    position: absolute;
    top: 0;
    left: 0;
    border-right: 1px solid#ccc;
    color: #676868;
    font-size: 0.8rem;
    text-align: center;
    line-height: 3rem;
  }
</style>