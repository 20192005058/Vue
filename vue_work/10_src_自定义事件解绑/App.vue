<template>
  <div class="a">
      <!-- 通过父组件给子组件传递函数类型的props实现:子给父传递数据 -->
       <SchoolName :getSchool="getSchool"></SchoolName>
       <hr/>
       <br>
       
       <StudentName v-on:lt="getStudent" v-on:demo="m1"></StudentName>
  

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
        methods:{
            getSchool(name){
                console.log('学校名称是',name);
            },
            getStudent(name,...params){
                 console.log('学校名称是',name,params);
            },
            m1(){
                console.log('demo触发调用了m1');
            }
        },
    }
</script>

<style>
.a{
    background-color: gray;
}
</style>