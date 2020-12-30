// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/css/reset.css';

//引入Vuex仓库
import store from './store/index';
//引入全局组件
import './components/index.js';
//引入全局过滤器
import './filters/index';
//引入elementUI
import ElementUI from 'element-ui';
import "element-ui/lib/theme-chalk/index.css"
Vue.use(ElementUI);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
