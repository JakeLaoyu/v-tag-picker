import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueHighlightJS from 'vue-highlightjs'

// 导入组件库
// import TagPicker from '~/index'
// 注册组件库
// Vue.use(TagPicker)

Vue.use(VueHighlightJS)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
