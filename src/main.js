import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Firebase from "./firebase" //追加
import "./registerServiceWorker"; //追加


Firebase.init(); //追加
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
