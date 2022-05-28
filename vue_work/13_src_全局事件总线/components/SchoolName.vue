<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>

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
        mounted(){
            //绑定自定义事件，lt触发就调用携带过来的val数据函数
            this.$bus.$on('lt',(val)=>{
                console.log('学生姓名为：',val);
            })
        },
        beforeDestroy(){
            this.$bus.$off('lt');
        }
  }
    
</script>

<style scoped>
    .demo{
        background-color: orange;
    }
</style>