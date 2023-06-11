import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import axios from 'axios';


import moment from 'moment'; 
import 'moment/locale/zh-cn';
moment.locale('zh-cn'); //设置语言 或 moment.lang('zh-cn'); 
Vue.prototype.$moment = moment;//挂载到当前vue实例对象

Vue.config.productionTip = false;

Vue.use(Antd);
Vue.prototype.$axios = axios 


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
