<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="sendSchoolName">点击提示学校名</button>
    </div>
</template>

<script>

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
            props:['getSchool'],
        methods:{
            sendSchoolName(){
                this.getSchool(this.name)
            }
        }
            }
    
</script>

<style scoped>
    .demo{
        background-color: orange;
    }
</style>