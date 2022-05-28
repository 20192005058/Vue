<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学生名：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <button @click="fun">点击</button>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
    export default {
        name:'StudentName',
         data(){
            return {
                name:'刘德华',
                age:18
            }
        },
        methods:{
            fun(){
                //发布消息
                pubsub.publish('hello',666);
            },
        }
     }
    
</script>

<style scoped>
.demo{
    background-color: blue;
}
</style>