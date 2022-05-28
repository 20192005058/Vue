<template>
  <div class="a">
      <!-- 通过父组件给子组件传递函数类型的props实现:子给父传递数据 -->
       <SchoolName :getSchool="getSchool"></SchoolName>
       <hr/>
       <br>
        <!-- 1.给StudentName组件这个实例对象绑定了一个lt事件
        如果触发了这个lt事件,getStudent函数就会被调用
        lt怎么触发? 原则:给谁绑的事件，就找谁去触发事件
        给StudentName实例对象绑定的事件,就去找StudentName的实例对象去触发 -->
       <!-- 2.通过父组件给子组件绑定一个自定义事件实现:子给父传递数据 -->
       <!-- 没有把getStudent交给StudentName组件，是把getStudent作为事件
       的回调使用 -->
       <StudentName v-on:lt="getStudent"></StudentName>
       <!-- 只触发一次
        <StudentName v-on:lt.once="getStudent"></StudentName> -->

       <!-- 3.通过ref获取到StudentName组件的实例对象 -->
       <StudentName ref="student"></StudentName>

       <button @click="show">点击输出ref内容</button>
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
            show(){
             //  this.$refs.student.name='张学友';
                console.log(this.$refs.student.age);
            }
        },
          mounted(){
            console.log('挂载了！')
            //当触发了lt事件的时候调用getStudent函数，这是与2一样的功能    
            setTimeout(() => {
                this.$refs.student.$on('lt',this.getStudent);
                //只触发一次
                // this.$refs.student.$once('lt',this.getStudent);
            }, 3000);
        },
    }
</script>

<style>
.a{
    background-color: gray;
}
</style>