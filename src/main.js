import Vue from 'vue'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false
 
new Vue({
 router,
 
 data: function() {
  return {
    activeCardIndex: null
    , cardStackArray: [
        { 
          vendorClass: 'evil-corp',
          number: '11111',
          holder: 'Josef',
          ccv: '111',
          vendor: 'Evil Corp',
        },
        { 
          vendorClass: 'bitcoin',
          number: '22222',
          holder: 'Margaret',
          ccv: '222',
          vendor: 'Bitcoin',
        },
        { 
          vendorClass: 'ninja-bank',
          number: '33333',
          holder: 'Mao',
          ccv: '333',
          vendor: 'Ninja Bank',
        }
    ]
  }
 }, 
 render: h => h(App)
}).$mount('#app')



