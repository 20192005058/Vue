<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="addTodo"/>
</div>
</template>

<script>
//id生成，nanoid是一个函数，用分别导入
import {nanoid} from 'nanoid'
export default {
    name:'MyHeader',
    data(){
      return {
        title:''
      }
    },
    methods:{
      addTodo(){
        if(this.title.trim()=='') return alert('请输入任务！');
       //   console.log(e.target.value); 
      //封装成一个对象
      let todo ={id:nanoid(),title:this.title,done:false};
     
      //调用父亲中的addTodos函数
      this.addTodos(todo);
      this.title='';
      }
    },
    props:['addTodos'],
   
}
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>