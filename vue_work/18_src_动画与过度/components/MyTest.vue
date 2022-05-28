<template>
  <div>
      <button @click="isShow = !isShow">点击动画</button>
      <h2 class="demo go" v-show="isShow">hello</h2>
      
      <transition name="hello" :appear="true">
          <h2 class="demo" v-show="isShow">hello</h2>
      </transition>

  </div>
</template>

<script>
//动画实现
export default {
    name:'MyTest',
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
 }
 .come{
     /* 动画的时间 */
     animation: lt 1s;
 }
 .go{ 
     animation: lt 1s reverse;
 }
 .hello-enter-active{
        animation: lt 1s;
 }
 .hello-leave-active{
        animation: lt 1s reverse;
 }
 @keyframes lt{
     from{
         transform: translateX(-100%);
     }
     to{
          transform: translateX(0px);
     }
     
 }
</style>