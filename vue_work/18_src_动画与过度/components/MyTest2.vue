<template>
  <div>
      <button @click="isShow = !isShow">点击动画</button>
      <transition name="hello" :appear="true">
          <h2 class="demo" v-show="isShow">hello</h2>
      </transition>
      <!-- transition只能一个元素 -->
      <transition-group name="hello" :appear="true">
          <h2 class="demo" v-show="isShow" key="1">hello</h2>
          <h2 class="demo" v-show="!isShow" key="2">hello</h2>
      </transition-group>

  </div>
</template>

<script>
//过度实现
export default {
    name:'MyTest2',
    data(){
        return {
            isShow:true
        }
    },
    methods:{
    }
   
}
</script>

<style>
 .demo{
     background-color: skyblue;
     /* 过度变化的时间 */
     /* transition: 1s linear; */
 }
    /* 出现的起点 离开的终点*/
  .hello-enter ,.hello-leave-to{
      transform: translateX(-100%);
  }
    .hello-enter-active,.hello-leave-active{ 
        transition: 1s linear;
    }


  /* 出现的终点 离开的起点*/
  .hello-enter-to , .hello-leave{
      transform: translateX(0px);
  }
 /*  .hello-leave{ 
      transform: translateX(0px);
  }
  .hello-leave-to{ 
      transform: translateX(-100%);
  }
  */
</style>