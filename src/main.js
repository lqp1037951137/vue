// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import * as echarts from 'echarts'
import 'vant/lib/index.css';
import {Lazyload} from 'vant'
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(echarts)
Vue.use(Lazyload, {
  lazyComponent: true
})

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
