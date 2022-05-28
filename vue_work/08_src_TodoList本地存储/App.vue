<template>
 <div id="root">
  <div class="todo-container">
    <div class="todo-wrap">
      <MyHeader :addTodos="addTodos" />
      <MyList :todos="todos" :changeHandler="change" :handleDelete="handleDelete"/>
      <MyFooter :todos="todos" :selAll="selAll" :deleteAll="deleteAll"/>
    </div>
  </div>
</div>
</template>

<script>
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
import MyList from './components/MyList.vue'

export default {
    name:'App',
    components:{MyHeader, MyFooter,MyList},
     data(){
      return {
        
        todos:JSON.parse(localStorage.getItem('1'))||[]
      }
    },
    methods:{
      //添加数据
      addTodos(todo){
       // console.log(todo);
       this.todos.unshift(todo);
      },
      //修改数据勾选
      change(id){
     //   console.log(id);
         this.todos.forEach((todo) => {
           if(todo.id===id)
           return todo.done =!todo.done;
         });
      },
      //删除一个todo
      handleDelete(id){
        if(confirm('删除该选项？'))
        this.todos =this.todos.filter((todo)=>{
          return todo.id!=id;
        })
      },
      //全选or不选
      selAll(value){
       this.todos.forEach((todo)=>{
          todo.done=value;
        })
      },
      //删除全部
      deleteAll(){
        this.todos =this.todos.filter((todo)=>{
          return !todo.done;
        })
      }
    },
    watch:{
      todos:{
        deep:true,
        handler(value){
        let result =value;
        //这里是更新key->1的数据，删除也是一样能够保存的
        localStorage.setItem('1',JSON.stringify(result));
       }
      }
    }
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;	 /* 行内块元素 */
  padding: 4px 12px;	/* 内边距上下 左右 */
  margin-bottom: 0;	/* 下边框到另一元素的距离 */
  font-size: 14px;	/* 字体大小 */
  line-height: 20px; /* 行高 */
  text-align: center; /* 文本水平方向上居中 */
  vertical-align: middle; /* 行内元素垂直对齐(不是块) */
  cursor: pointer; /* 鼠标经过有小手 */
  /* 阴影 */
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px; /* 圆角程度 */
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none; /* 线条轮廓无 */
}

.todo-container {
  width: 600px;
  margin: 0 auto; /* 上下外边距0,水平居中 */
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

</style>