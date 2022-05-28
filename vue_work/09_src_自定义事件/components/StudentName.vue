<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学生名：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <button @click="sendStudentName">点击提示学生名</button>
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
                methods: {
                    showName(){
                        console.log('学生'+this.name);
                    },
                    sendStudentName(){
                        //$emit触发StudentName组件实例身上的lt事件
                        this.$emit('lt',this.name,666,888,999);
                    }
                },
            }
    
</script>

<style scoped>
.demo{
    background-color: blue;
}
</style>