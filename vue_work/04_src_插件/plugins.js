export default{
    install(Vue,a2){
        console.log(Vue,a2);

        //全局过滤器
        Vue.filter('myslice',function(value){
            return value.slice(0,4);
        })

        //定义全局指令
        Vue.directive('fbind',{
            //1.指令与元素成功绑定时
            bind(element,binding){
                element.value=binding.value;
            },
            //2.指令所在元素被插入页面调用时
            inserted(element,binding){
                element.focus();
            },
            //3.指令所在模板结构被重新解析时调用
            update(element,binding){
                element.value=binding.value;
                element.focus();
            }
        })

        //定义全局混入
        Vue.mixin({
            data(){
                return {
                    x:100,
                    y:200
                }
            },
            mounted() {
                console.log('挂载了！！！');
            },
        })

        //在Vue原型上定义一个方法
        Vue.prototype.hello = ()=>{
            console.log('你好')
        }


    }
}