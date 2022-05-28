<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学生名：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <button @click="sendStudent">点击发送学生姓名</button>
    </div>
</template>

<script>
   
    export default {
        name:'StudentName',
         data(){
            return {
                name:'刘德华',
                age:18
            }
        },
        methods:{
            sendStudent(){
                this.$bus.$emit('lt',this.name);
            }
        },
      
     }
    
</script>

<style scoped>
.demo{
    background-color: blue;
}
</style>