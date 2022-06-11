import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import Ripple from 'vue-ripple-directive'



Ripple.color = 'rgba(255, 255, 255, 0.35)';
Ripple.zIndex = 55;
Vue.directive('ripple', Ripple);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
