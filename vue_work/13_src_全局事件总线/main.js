import Vue from 'vue'

import App from './App.vue'

const p =Vue.extend();
const vc =new p();

Vue.prototype.x=p;
Vue.prototype.y=vc;

Vue.config.productionTip=false;
new Vue({
    el:'#root',
    render:(h) =>h(App),
    beforeCreate(){
        Vue.prototype.$bus=this;
    }
})