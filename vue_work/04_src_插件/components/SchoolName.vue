<template>
  <div id="div2">
     <h2>学校名：{{name | myslice}}</h2>
    <h2>学校地址：{{address}}</h2>
    <input type="text" v-fbind:value="n">

    <button @click="n++">点击n+1</button>
    <button @click="hello">原型上的方法</button>
  </div>
</template>

<script>
export default {
    name:'SchoolName',
    data() {
        return {
          name:'SCNU00011',
          address:'南海',
          n:1
        }
    },

    
}
</script>

<style>
#div2{
    background-color: orange;
}
</style>