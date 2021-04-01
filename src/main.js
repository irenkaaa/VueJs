import Vue from 'vue'
import App from './App.vue'
import "./assets/styles.css";
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'

import router from './router'

Vue.use(VueRouter)
Vue.use(Vuelidate)
Vue.use(ElementUI, { locale });

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
