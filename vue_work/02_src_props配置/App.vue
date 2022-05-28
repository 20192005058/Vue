<template>
  <div id="div1">
      <h2 ref="MyFirst">欢迎来到缅甸</h2>
      <h2>第二个H2</h2>
      <button @click="showMsg1" ref="MySecond">点击输出信息</button>
      <SchoolName ref="MyThird" name="张三" year="2019" month="5" :day="11"> </SchoolName>
       
  </div>
</template>

<script>
import SchoolName from './components/SchoolName.vue'
export default {
    name:'App',
    components:{
        SchoolName
    },
    methods:{
        showMsg1(){
            console.log(this)
            //获取的是h2 / button 的真实DOM元素
            console.log(this.$refs.MyFirst)
            console.log(this.$refs.MySecond)
            //不是获取SchoolName的真实DOOM元素
            //this.$refs.MyThird获取的是SchoolName这个实例对象
            console.log(this.$refs.MyThird)
        }
    }
}
</script>

<style>
#div1{
    background-color: blue;
}
</style>