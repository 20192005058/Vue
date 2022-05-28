<template>
    <!-- 组件的结构 -->
    <div>
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="showName">点击提示学校名</button>
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
        name:'SchoolName',
         data(){
                    return {
                        name:'scnu',
                        address:'南海'
                    }
                },
                methods: {
                    showName(){
                        console.log('学校名'+this.name);
                    }
                },
            }
    
</script>

<style>
    .demo{
        background-color: orange;
    }
</style>