import Vue from 'vue'

import App from './App.vue'

//全局引入
import {mixin,mixin2} from './mixin'
//使用
Vue.mixin(mixin2)
Vue.mixin(mixin)

Vue.config.productionTip=false;
new Vue({
    el:'#root',
    render:(h) =>h(App)
})