<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学生名：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <button @click="sendStudentName">点击提示学生名</button>
        <button @click="unbind">解绑</button>
    </div>
</template>

<script>
   
    export default {
        name:'StudentName',
         data(){
                    return {
                        name:'刘德华',
                        age:18,
                        n:1
                    }
                },
                methods: {
                    sendStudentName(){
                        this.$emit('lt',this.name);
                    },
                    unbind(){
                        this.$off('lt'); //解绑一个自定义事件
                    },

                },
            }
    
</script>

<style scoped>
.demo{
    background-color: blue;
}
</style>