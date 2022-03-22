import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
// import  md2json from 'md-2-json'
import VueSimpleMarkdown from 'vue-simple-markdown'
import axios from 'axios';
Vue.prototype.$http = axios;

const firebaseConfig = {
  apiKey: "AIzaSyD37in6RZuLaJQPUW68PjcHiUwCkICNSWo",
  authDomain: "honors-prod-20f03.firebaseapp.com",
  projectId: "honors-prod-20f03",
  storageBucket: "honors-prod-20f03.appspot.com",
  messagingSenderId: "138338764947",
  appId: "1:138338764947:web:f33b6b30a5b53308a62566",
  measurementId: "G-T7GETEVZJG"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  VueSimpleMarkdown,
  render: h => h(App)
}).$mount('#app')

export const dbStore = firebase.firestore();
export const storage = firebase.storage();

