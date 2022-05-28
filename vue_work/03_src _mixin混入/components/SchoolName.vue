<template>
  <div id="div2">
     <h2>学校名：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="showName">点击弹窗名字</button>
  </div>
</template>

<script>
//这里要引入
import {mixin,mixin2} from '../mixin'
export default {
    name:'SchoolName',
    data() {
        return {
          name:'SCNU',
          address:'南海'
        }
    },
    //这里要声明
    mixins:[mixin,mixin2]
   /*  methods: {
       showName(){
           alert(this.name);
       }
    }, */
    
}
</script>

<style>
#div2{
    background-color: orange;
}
</style>