<template>
    <!-- 组件的结构 -->
    <div>
        <h2>学生名：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <button @click="showName">点击提示学生名</button>
    </div>
</template>

<script>
   /* const school =Vue.extend({
            data(){
                    return {
                        name:'scnu',
                        address:'南海'
                    }
                },
                methods: {
                    showName(){
                        console.log('学校名');
                    }
                },
            })
    export default school */

    //简写
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
                    }
                },
            }
    
</script>

<style>
</style>