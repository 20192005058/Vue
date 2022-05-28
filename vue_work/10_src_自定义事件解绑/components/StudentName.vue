<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学生名：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <h2>n值:{{n}}</h2>
        <button @click="add">点击n++</button>
        <button @click="sendStudentName">点击提示学生名</button>
        <button @click="unbind">解绑</button>
        <button @click="de">销毁vm</button>
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
                    showName(){
                        console.log('学生'+this.name);
                    },
                    sendStudentName(){
                         console.log('sendStudentName被调用了！')
                        //$emit触发StudentName组件实例身上的lt事件
                        this.$emit('lt',this.name,666,888,999);
                    },
                    unbind(){
                        this.$off('lt'); //解绑一个自定义事件
                      //  this.$off(['lt','demo']);//解绑多个
                        this.$off() //解绑全部
                    },
                    add(){
                        //click这个原生的DOM事件，一旦绑定完成就不会撤销下来了，不管Vue怎么操作都要用正常的DOM事件对button进行操作
                        //add与click这个事件一旦绑定了，就算VM被销毁了也不会被解绑
                        //vm，vc解绑的是他的自定义事件
                        console.log('add回调函数被调用了！！')
                        this.n++;
                    },
                    de(){
                        this.$destroy();
                    }
                },
            }
    
</script>

<style scoped>
.demo{
    background-color: blue;
}
</style>