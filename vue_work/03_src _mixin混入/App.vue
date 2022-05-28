<template>
  <div id="div1">
    <SchoolName/>
    <hr>
    <StudentName/>
  </div>
</template>

<script>
import SchoolName from './components/SchoolName.vue'
import StudentName from './components/StudentName.vue'
export default {
    name:'App',
    components:{
        SchoolName,StudentName
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