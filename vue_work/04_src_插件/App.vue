<template>
  <div id="div1">
    <SchoolName/>
  
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
       
    }
}
</script>

<style>
#div1{
    background-color: blue;
}
</style>