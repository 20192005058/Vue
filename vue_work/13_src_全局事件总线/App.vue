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
         mounted(){
             console.log("App",this.x);
             console.log("App",this.y);
         }
       
    }
</script>

<style>
.a{
    background-color: gray;
}
</style>