<template>
  <div>
      <button @click="isShow = !isShow">点击动画</button>
      <!-- transition只能一个元素 -->
      <transition-group  
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__backInDown"
      leave-active-class="animate__backOutUp"
       >
          <h2  v-show="isShow" key="1">hello</h2>
          <h2  v-show="isShow" key="2">hello</h2>
      </transition-group>

  </div>
</template>

<script>
//样式可以直接引入
import 'animate.css'
export default {
    name:'MyTest3',
    data(){
        return {
            isShow:true
        }
    },
   
}
</script>

<style>
 h2{
     background-color: skyblue;
 }

 
</style>