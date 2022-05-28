 /*
    该文件是整个项目的入口文件
 */
//引入Vue
 import Vue from 'vue'
 //引入App组件，它是所有组件的父组件
import App from './App.vue'


function fun(){
  
}


Vue.config.productionTip = false
//创建Vue对象 --vm
new Vue({
  //将App组件放入容器中
  
  render: h => h(App),
 /* 
  render(createElement){
      render需要返回值     往html添加的元素 ，和向元素中添加的内容
    return createElement('h1','你好！');
  } 
  */

}).$mount('#root')
//.$mount('#app') ---->el:'#app',
 

