import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
// import wordcloud from 'wordcloud'

Vue.config.productionTip = false
// Vue.prototype.$wordcloud = wordcloud

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
