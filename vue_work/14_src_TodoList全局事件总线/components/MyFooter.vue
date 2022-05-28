<template>
  <div class="todo-footer" v-show="total">
    <label>
        <input type="checkbox" :checked="isAll" @click="isCheck"/>
       <!--  可以用v-model -->
       <!--  <input type="checkbox" v-model="inAll"/> -->
    </label>
    <span>
        <span>已完成{{isDone}}</span> / 全部{{total}}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name:'MyFooter',
    props:['todos'],
    computed:{
      //reduce 数组里的方法要多掌握
      isDone(){
      /*   let i=0;
        this.todos.forEach(todo => {
          if(todo.done)
          i++
        });
        return i; */
        return this.todos.reduce((pre,todo)=> pre+(todo.done ? 1 : 0),0)
      },
      total(){
        return this.todos.length;
      },
      isAll(){
        return this.total === this.isDone &&this.total>0;
      },
      //当计算属性里面要有set方法时 不能写成函数形式
      /* inAll:{
        get(){
          return this.isAll;
        },
        set(value){
          this.selAll(value);
        }
      }, */
    },
    methods:{
      isCheck(doAll){
        console.log("MyFooter:1");
       // this.selAll(doAll.target.checked);
        this.$emit('selAll',doAll.target.checked);
      },
      clearAll(){
        console.log("MyFooter:2");
        this.$emit('deleteAll');
      }
    }
}
</script>

<style scoped>

/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}

</style>