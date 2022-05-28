<template>
  <div id="div2">
      <button @click="showMsg">点击显示</button>
      <button @click="msg++">点击+1</button>
      <h2>姓名：{{name}}</h2>
      <h2>年：{{year +1}}</h2>
        <!-- 强制转换成数字 -->
      <h2>月：{{month*1+1}}</h2>
     <!-- 动态绑定,v-bind----运行引号里面js表达式执行的结果返回 -->
      <h2>日：{{myDay+1}}</h2>
     <button @click="dayAdd">点击+1</button>
  </div>
</template>

<script>
export default {
    name:'SchoolName',
    data() {
        return {
            msg:1,
            myDay:this.day
        }
    },
    methods: {
        showMsg(){
            console.log('显示：'+this.msg)
        },
        dayAdd(){
            //props中优先级高于data
            this.myDay++;
          console.log(this.day)
        }
    },
      props:['name','year','month','day'],  //简单写法 
    /* props:{
        name:String,
        year:Number,
        month:Number,
        day:Number
    }, */

    /* props:{
        name:{
            type:String,
            required:true
        },
        year:{
            type:Number,
            default:2019
        },
        day:{
            type:Number,
            default:5
        },
        month:{
            type:Number,
            default:3
        },
    } */
}
</script>

<style>
#div2{
    background-color: orange;
}
</style>