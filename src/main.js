import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import Vuelidate from 'vuelidate';
import VueToastr2 from 'vue-toastr-2';
import Datepicker from 'vuejs-datepicker';
import VuePromiseBtn from 'vue-promise-btn';

import App from './App.vue';
import router from './router';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-toastr-2/dist/vue-toastr-2.min.css';
import 'vue-promise-btn/dist/vue-promise-btn.css';

window.toastr = require('toastr');

Vue.use(VueToastr2);
Vue.use(Datepicker);
Vue.use(BootstrapVue);
Vue.use(Vuelidate);
Vue.use(VuePromiseBtn);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
