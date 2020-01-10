<template>
    <div class="header" >
      <div class="title">
          <i class="icon-menu" @click="$emit('black')"  ></i>
          <!-- <i class="icon-back"></i> -->
          <h3>云新闻</h3>
          <i class="icon-msg" ></i>
          <!-- <i class="icon-more" ></i> -->
          <span class="counts" >18</span >
      </div>
    </div>
</template>
<script>

export default {
    name:'l',
    data(){
        return {}
    },
}


</script>
<style lang="scss" scoped>
.header{
  position: fixed;
    left:0;
    top:0;
    right:0;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 3.6rem;
    z-index: 3;
    background-color: #BE0122;
    color: white;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, .3);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    overflow: hidden;
i {
    position: absolute;
    z-index: 1;
    flex: 1;
    display: inline-block;
    width: 1.8rem;
    height: 1.8rem;
  }
  i.icon-menu {
    left: 1rem;
    top: 1rem;
    background: url('../../common/icons/icon-menu.svg') no-repeat;
    background-size: contain;
  }
  // i.icon-back {
  //   left: 16px;
  //   top: 17px;
  //   background: url('../../common/icons/icon-back.svg') no-repeat;
  //   // background-size: contain;
  //   background-size: 23px;

  // }
   i.icon-msg {
    right: 1rem;
    top: 1rem;
    background: url('../../common/icons/icon-msg.svg') no-repeat;
    background-size: contain;
  }
  //   i.icon-more {
  //   right: 1.6rem;
  //   top: 1.6rem;
  //   background: url('../../common/icons/icon-more.svg') no-repeat;
  //   background-size: contain;
  // }
    span.counts {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    text-align: center;
    background-color: #ED274A;
    border-radius: 0.5rem;
    font-size: 78%;
    width: 1rem;
    height: 1rem;
    right: 0.8rem;
    top: 1.2rem;
  }
  h3 {
    flex: 5;
    letter-spacing: 0.3rem;
    font-size:1.2rem;
  }
 
}



</style>