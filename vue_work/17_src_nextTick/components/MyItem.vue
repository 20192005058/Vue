<template>
   <li>
          <label>
            <input type="checkbox"   @click="getId(todo.id)" :checked="todo.done"/>
            
            <span v-show="!todo.isEdit">{{todo.title}}</span>
            <input 
            type="text" 
            :value="todo.title"
            v-show="todo.isEdit"
            @blur="editBlur(todo,$event)"
            ref="inputTitle"
            >
          </label>
          <button class="btn btn-danger" @click="getButtonId(todo.id)">删除</button>
           <button  v-show="!todo.isEdit" class="btn btn-edit" @click="editButton(todo)">编辑</button>
        </li>
</template>

<script>
export default {
    name:'MyItem',
    props:['todo','changeHandler','handleDelete'],
    methods:{
      getId(id){
        this.changeHandler(id);
      },
      getButtonId(id){
        this.handleDelete(id);
      },
      editButton(todo){
        //响应式添加----- todo.isEdit直接添加与用this.$set(todo,'isEdit',true)添加
        //todo.isEdit无法实现数据监视，也就是再对其值进行改变时DOM页面也不会受到影响，
        //Vue也不会去监视
        if(todo.hasOwnProperty('isEdit')){
          todo.isEdit=true;
        }
        else{
          this.$set(todo,'isEdit',true);
        }
        console.log(this.todo.isEdit);
     /*  setTimeout(() => {
        this.$refs.inputTitle.focus();
      }, 300); */
        this.$nextTick(function(){
          this.$refs.inputTitle.focus();
        })

      },
      editBlur(todo,e){
        if(e.target.value.trim()==='')
          return alert('请输入任务');
        todo.isEdit=false;
        this.$bus.$emit('updatedata',e.target.value,this.todo.id);
      }
    }
}
</script>

<style scoped>

/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button{
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover{
  background-color: gray;
}
 /* 注意li:hover button和li button:hover的区别 */
li:hover button{
  display: block;
}
</style>