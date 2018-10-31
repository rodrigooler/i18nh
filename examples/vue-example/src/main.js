import Vue from 'vue'
import App from './App.vue'
import {languages} from './i18nh.map';
import i18nh, { useT } from 'i18nh'

Vue.config.productionTip = false

i18nh({
  languages,
  defaultLanguage: 'en'
});

Vue.filter('t', function (value, args) {
  if (!value) return ''
  value = value.toString().toLowerCase();
  const [t] = useT();
  return t(value, args)
})

new Vue({
  render: h => h(App),
}).$mount('#app')
