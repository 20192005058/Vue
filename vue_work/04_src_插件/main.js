import Vue from 'vue'

import App from './App.vue'

import plugins from './plugins'

Vue.use(plugins,1)


Vue.config.productionTip=false;
new Vue({
    el:'#root',
    render:(h) =>h(App)
})