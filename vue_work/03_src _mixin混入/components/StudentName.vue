<template>
  <div id="div2">
     <h2>学生名：{{name}}</h2>
    <h2>学生年龄：{{age}}</h2>
    <button @click="showName">点击弹窗名字</button>
  </div>
</template>

<script>
import {mixin,mixin2} from '../mixin'
export default {
    name:'StudentName',
    data() {
        return {
          name:'刘德华',
          age:18
        }
    },
     mixins:[mixin,mixin2]
  /*   methods: {
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