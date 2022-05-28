<template>
  <div class="a">
      <!-- 通过父组件给子组件传递函数类型的props实现:子给父传递数据 -->
       <SchoolName :getSchool="getSchool"></SchoolName>
       <hr/>
       <br>
       <h1>{{num}}</h1>
       <h2>学生姓名是:{{sname}}</h2>
        <StudentName ref="student" @click.native="num++"></StudentName>
  

  </div>
</template>

<script>
    import SchoolName from './components/SchoolName'
    import StudentName from './components/StudentName'
    export default {
        name:'App',
        data(){
            return {
                sname:'',
                num:1
            }
        },
        components:{
            SchoolName,
            StudentName   
        },
        methods:{
            getSchool(name){
                console.log('学校名称是',name);
            },
           /*  getStudent(name){
                 console.log('学生名称是',name);
            }, */
        },
        mounted() {
              //  this.$refs.student.$on('lt',this.getStudent);
                this.$refs.student.$on('lt',(name)=>{
                  //  console.log('学生名称是',name);
                    this.sname=name;
                });
                this.$refs.student.$on('lt',function(){
                    //是StudentName组件的实例对象触发了lt事件，谁触发，谁调用
                    //这个回调函数就指向了StudentName组件的实例对象
                    //为什么v-on：不会？v-on：也是为这个实例对象绑定了lt事件，触发肯定也是实例对象触发的，也是这个
                    //实例对象调用的getStudent，为什么getStudent中的this依然指向App呢？
                    //因为Vue中承诺了methods中定义的普通方法都指向App这个实例对象
                    console.log(this);
                });
            },
    }
</script>

<style>
.a{
    background-color: gray;
}
</style>