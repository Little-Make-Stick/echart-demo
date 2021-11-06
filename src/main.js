import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'

Vue.config.productionTip = false;
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import './assets/css/root.css';
import './assets/css/tool.css'
import router from './router'

Vue.use(Element)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


