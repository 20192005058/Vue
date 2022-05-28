## 关于不同版本的Vue:
 -Vue.js与vue.runtime.xxx.js的区别：
    1. .vue.js是完整版的Vue,包含：核心功能+模板解析器
    2. .vue.runtime.xxx.js是运行版的Vue,只包含核心功能，没有模板解析器

-因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要
    使用render函数接收到的createElement函数去指定具体内容。



## vue.config.js配置文件
> 使用vue inspect > output.js可以查看到Vue脚手架的默认配置
> 使用vue.config.js可以对脚手架进行个性化定制， （官网详细）

## ref属性--->打标识
 1. 被用来给元素或子组件祖册引用信息（id的替代者）
 2. 应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象（vc）
 3. 使用方式：
    打标识： <h1 ref="xxx">....</h1> 或 <School ref="xxx"></School>
    获取：this.$refs.xxx


## 配置项props
 功能：让组件接收外部传过来的数据
    （1）.传递数据：
        <Demo name="xxx"/>
    （2）.接收数据：
        第一种方式（只接收）：
         props:['name']

        第二种方式（限制类型）：
        props:{
        name:String,
         }

        第三种方式（限制类型，限制必要性，指定默认值）:
        props:{
        name:{
            type:String,
            required:true
        },
        year:{
            type:Number,
            default:2019
      }
备注：props是只读的，Vue底层会监视你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据。

props可以通过函数传递使得父亲能够接受到儿子的数据，在父亲中定义函数，儿子props接收，在儿子中能够调用父亲中定义的函数了
props中传递父亲中的属性值时应该传给儿子的是同一个列如：
父 data{
    n：1
}
儿子中 接受到的n应该是同一个，与函数类似，这就是为什么props的值不允许直接修改了


## mixin(混入)
    功能：可以把多个组件共用的配置提取成一个混入对象
    使用方式：
        第一部定义混合，列如：
        {
            data(){...},
            methods:(){...},
            ...
        }
        第二步使用混入，例如：
        （1）.全局混入：Vue.mixin(xxx)
         (2). 局部混入：mixins:['xxx']

## 插件
    功能：用于增强Vue
    本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据。
    定义插件：
        对象.install=function(Vue,optioons){
            //1.定义全局过滤器
            Vue.filter(....)

            //2.添加全局指令
            Vue.directive(...)

            //3.配置全局混合
            Vue.mixin(...)

            //4.添加实例方法
            Vue.prototype.$myMethod =function(){...}
            Vue.prototype.$myProperty=xxx
        }
        使用插件：
        Vue.use(xxx)

##  scoped样式
    作用：让样式在局部生效,防止冲突，如果不声明就默认是全局的
    写法: <style scoped>

##  总结TodoList案例
1.组件化编码流程：
    (1).拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突。
    (2).实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用：
        1).一个组件在用：放在组件自身即可。
        2).一些组件在用：放在他们共同的父组件上（状态提升）.
    (3).实现交互：重绑定事件开始。

2.props适用于：
    (1).父组件==>子组件通信
    (2).子组件==>父组件通信（要求父先给子一个函数）
3.使用v-model是要切记：v-model绑定的值不能是props传过来的值，因为props是不可修改的！
在TodoList案例中，对于勾选用v-model成功更改了子组件的布尔值，通过props又成功更改了父组件的布尔值，为什么？
  v-model="todo.done"违反原则修改props为什么行?Vue对对象的监控修改判定
             a={x:100,y:200}------ a.x=200 这是修改了,但Vue检测不到
             a={x:100,y:200}------a={x:200,y:200},Vue可以检测到
这里todo.done更改了，但Vue不认为你是更改了。
不推荐这种做法。
4.props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做。

## webStorage
    1.存储内容大小一般支持5MB左右（不同浏览器可能还不一样）
    2.浏览器端通过Window.sessionStorage和Window.localStorage属性来实现本地存储机制。
    3.相关API：
        1.xxxxStorage.setItem('key','value');
            该方法接受一个键和值作为参赛，会吧键值对添加到存储中，如果键名还在，则更新其对应的值。
        2.xxxxStorage.getItem('person')
            该方法接受一个键名作为参赛，返回键名对应的值
        3.xxxxStorage.removeItem('key')
            该方法接受一个键名作为参赛，并把该键名从存储中删除
        4.xxxxStorage.clear()
            该方法会情况存储中的所有数据
    4.备注
        1.sessionStorage存储的内容会随浏览器窗口关闭而消失。
        2.LocalStorage存储的内容，需要手动清除才会消失。
        3.xxxxStorage.getItem（xxx）如果xxx对应的value获取不到，那么getItem的返回值就为null
        4.JSON.parse(null)的结果依然为null。

##  自定义事件 && 自定义指令
    runoob上自定义事件的解释：
    父组件是使用 props 传递数据给子组件，但如果子组件要把数据传递回去，就需要使用自定义事件！
    我们可以使用 v-on 绑定自定义事件, 每个 Vue 实例都实现了事件接口(Events interface)，即：    
            使用 $on(eventName) 监听事件
            使用 $emit(eventName) 触发事件
    对一个按钮
        <School v-on:lt="showData">点击</School>
    这是对School这个组件的实例对象绑定一个叫lt的事件，这个事件如果触发就会执行showData(定义为函数)。
    showData是作为一个回调函数。
        <button v-on:lt="showData">点击</button>
    这是对button绑定了一个叫lt的事件.... v-on:可以简写成@
    再看熟系的  <button @click="showData">点击</button>，点击按钮触发button中click事件。
    自定义事件是完成与元素的绑定，触发不是参考数据的改变...而是根据鼠标点击，键盘...这类东西的触发
    
    而自定义指令，更多的是VC或VM自己内部使用的，不像自定义事件可以追溯到儿子组件（因为可以获取子组件
    的实例对象）。自定义指令（非全局）可以直接在VM，VC中定义，与data平级，例：
        const app = {
                data() {
                    return {
                    }
                },
                directives: {
                    focus: {
                        //element为该指令所在的元素，binding被绑定的数据（不止是只有value值）
                        mounted(element,binding) {
                            el.focus()
                        }
                    }
                }
            }
    指定义指令三个回调：函数简写模式只有bind与update
            1. bind：指令与元素成功绑定时调用。
            2. inserted：指令所在元素被插入页面时调用。
            3. update：指令所在模板结构被重新解析时调用。
    主要：尽量避免对binding进行直接修改，容易造成递归死循环
    自定义指令的调用： v-lt="xxx"-----v-fbind="xxx"
    自定义指令能主动调用，一绑定就主动调用了，模板一更新就调用了
    而自定义事件要自己通过鼠标，键盘等主动去调用
    百度百科：
    对于自定义事件最需要了解的一点是，您的代码必须导致这些事件发生。这些事件不会为响应用户或系统的动作而自动发生，即使能够编写导致事件确实以这种方式发生的代码也不例外。

## 组件的自定义事件
    1.一种组件间通信的方式：适用于：子组件===>父组件
    2.使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（事件的回调在A中）。
    3.绑定自定义事件：
        1.第一种方式：
        在父组件中<Demo @lt="xxx">
        或<Demo v-on:lt="xxx">
        2.第二种方式，在父组件中
        <Demo ref ="demo">
        ....
        mounted(){
            this.$refs.demo.$on('lt',this.test);
        }
        3.在子组件中触发事件
        this.$emit('it',data)
        4.若想让自定义事件只能触发一次，可以使用once修饰符，或$once方法。
    4.触发自定义事件：
        this.$emit('lt',数据)
    5.解绑自定义事件
        this.$off('lt')
    6.组件上也可以绑定原生DOM事件，需要使用native修饰符，若不使用则当自定义事件处理
    7.注意：
        通过this.$ref.xxx.$on('lt',回调)绑定自定义事件时，回调要么配置在methods中，要么用箭头函数，否则this指向会出现问题，会指向子组件的实例对象

## 全局事件总线
1.一种组件间通信的方式，适用于任意组件间通信。
2.安装全局事件总线：
    new Vue({
        .....
        beforeCreate(){
            Vue.prototype.$bus=this;/*安装全局事件总线,$bus就是当前应用的vm*/
        },
        .....
    })
3.使用事件总线
    1.接收数据：A组件想接收数据，则在A组件中给$bus绑定自定义事件，事件的回调留在A组件自身
    methods(){
        demo(data){....}
        ....
    },
    mounted(){
        this.$bus.$on('xxx',this.demo)
    }
    2.提供数据:
        this.$bus.$emit('xxx',数据)
4.最好在beforeDestroy中，用$off去接触当前组件所用到的事件。

##  消息订阅与发布
1.一种组件间通信的方式，适用于任意组件间通信。
2.使用步骤:
    1.安装pubsub：npm i pubsub-js
    2.引入：import pubsub from 'pubsub-js'
    3.接收数据：A组件想要接收数据，则在A组件中订阅消息，订阅的回调六在A组件自身
    methods(){
        demo(data){....}
    }
    ....
    mounted(){
        this.pid=pubsub.subscribe('xxx',this.demo) //订阅消息
    }
4.提供数据:pubsub.publish('xxx',数据)
5.最好在beforeDestroy钩子中，用Pubsub.unsubscribe(pid)去取消订阅

## TodoList编辑功能总结
1.todo.hasOwnProperty('isEdit')，hasOwnProperty判断是否存在元素'isEdit'
2.methods中的函数形式方法this指向Vue都帮忙改成了这个Vue的实例对象vm了
就像这个函数
<input 
            type="text" 
            :value="todo.title"
            v-show="todo.isEdit"
            @blur="editBlur(todo,$event)"
>

editBlur(todo,e){
        if(e.target.value.trim()==='')
          return alert('请输入任务');
        todo.isEdit=false;
        this.$bus.$emit('updatedata',e.target.value,this.todo.id);
 }
item中的输入框鼠标失去焦点事件，在原生的js中应当this指向这个输入框
但在methods方法中指向了Vue实例对象vm
3.可以通过$event配合e.target来传递当前事件发生元素
4. Vue.$set 响应事件：
    this.$set(todo,'isEdit',true);和this.isEdit=true;的区别
    this.isEdit=true 给VM或VC上添加了一个属性，但是这个属性没有get和set方法
    也不会是响应式的数据，这个属性值改变了，但是Vue不会检测到，DOM也不会改变
    Vue.set()-------vm.$set():
    通过this.$set(目标,key,val)可以变成响应式的数据
值得注意的是，这里对props进行修改了，但是Vue为什么没有检测到？
    a={x:100,y:200}------ a.x=200 这是修改了,但Vue检测不到
    a={x:100,y:200}------a={x:200,y:200},Vue可以检测到 
注意：Vue.set()和vm.$set()不能给vm或vm的根数据对象添加属性

## nextTick TodoList
在Vue的函数中，数据变化不会立刻更新DOM，而是等函数执行完毕后去处理DOM的更新
也就是
{
todo.isEdit=true;//数据更新
this.$refs.inputTitle.focus();//获取焦点
}
这里获取不到，Vue发现了数据要更新，但是没有立刻更新，这里的input框还没有出现
焦点自然无法获取，解决方法：
1.设置一个定时器
 setTimeout(() => {
        this.$refs.inputTitle.focus();
 }, 300);
 等函数执行完之后在获取焦点，定时器也可不给时间
 定时器的立即到点也得推到队列上执行
2.nextTick：
    this.$nextTick(function(){
            this.$refs.inputTitle.focus();
})
    1.语法：this.$nextTick(回调函数)
    2.作用：在下一次DOM更新结束后执行其指定的回调
    3.什么时候用：当数据改变后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行。

## Vue封装的过度与动画
1.作用：在插入，更新或移除DOM元素时，在合适的时候给元素添加样式类名
2.写法：
        1.准备好样式：
         元素进入的样式：
            1.v-enter:进入的起点
            2.v-enter-active：进入过程中
            3.v-enter-to：进入的终点
         元素离开的样式：
            1.v-leave：离开的起点
            2.v-leave-active：离开过程中
            3.v-leave-to：离开的终点
        2.使用<transition>包裹要过度的元素，并配置name属性：
        <transition name="hello">
        <h1 v-show="isShow">你好！</h1>
        </transition>
        3.备注：若有多个元素需要过度，则需要使用<transition-group>，且每个元素要指定key值。

## 

    