<template>
   <li>
          <label>
            <!--  v-model="todo.done"违反原则修改props为什么行?Vue对对象的监控修改判定
             a={x:100,y:200}------ a.x=200 这是修改了,但Vue检测不到
             a={x:100,y:200}------a={x:200,y:200},Vue可以检测到 -->
            <!-- <input type="checkbox"  v-model="todo.done" @click="say"/> -->
            <input type="checkbox"   @click="getId(todo.id)" :checked="todo.done"/>
            <span>{{todo.title}}</span>
          </label>
          <button class="btn btn-danger" @click="getButtonId(todo.id)">删除</button>
        </li>
</template>

<script>
export default {
    name:'MyItem',
    props:['todo'],
    methods:{
      getId(id){
        console.log('getId1')
      //  this.changeHandler(id);
        this.$bus.$emit('change',id);
      },
      getButtonId(id){
        console.log('getButtonId')
     //   this.handleDelete(id);
        this.$bus.$emit('handleDelete',id);
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