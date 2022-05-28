<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
    export default {
        name:'SchoolName',
         data(){
            return {
                name:'scnu',
                address:'南海',
            }
        },
        mounted(){
            //订阅消息
         this.pubId= pubsub.subscribe('hello',function(msgName,data){
            //console.log(this);
             //这里的this指向的不是VC，输出this是undefined
                console.log('订阅了消息',msgName,data);
            })
        },
        beforeDestroy(){
            //要这样取消订阅
            pubsub.unsubscribe(this.pubId);
        }
    
  }
    
</script>

<style scoped>
    .demo{
        background-color: orange;
    }
</style>