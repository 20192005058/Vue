<template>
  <div class="a">
     <SchoolName></SchoolName>
     <br>
     <hr/>
    <StudentName/>
  </div>
</template>

<script>
    import SchoolName from './components/SchoolName'
    import StudentName from './components/StudentName'
    export default {
        name:'App',
        components:{
            SchoolName,
            StudentName   
        },
       
    }
</script>

<style>
.a{
    background-color: gray;
}
</style>