// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'es6-promise/auto'
import Vuex from 'vuex'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(Vuex)
Vue.use(VueMaterial)

const store = new Vuex.Store({
  state: {
    products: [
        {productId: 0, name: "Cocacola", price: 10, picUrl: "../static/cocacola.png" },
        {productId: 1, name: "Ramlösa", price: 10, picUrl: "../static/ramlosa.png"},
        {productId: 2, name: "Fanta", price: 12, picUrl: "../static/fanta.png"},
        {productId: 3, name: "Ahlgrens bilar", price: 20, picUrl: "../static/bilar.png"},
        {productId: 4, name: "Geléhallon", price: 11, picUrl: "../static/gelehallon.png"},
        {productId: 5, name: "Schweizernöt", price: 16, picUrl: "../static/schweizernot.png"},
        {productId: 6, name: "Snickers", price: 10, picUrl: "../static/snickers.png"},
        {productId: 7, name: "Felix Gulasch", price: 29, picUrl: "../static/felix_gulasch.png"},
        {productId: 8, name: "Felix Coconut", price: 35, picUrl: "../static/felix_coconut_bean_curry.png"},
        {productId: 9, name: "Felix Soppa", price: 30, picUrl: "../static/felix_potatis_purjolok.png"}
      ],
    cartProducts: []
  },
  getters: {
    getCartProductsCount: (state) => {
      return state.cartProducts.length;
    },
    getCartProductCount: (state) => (productId) => {
      return state.cartProducts.filter(x => x.productId === productId).length;
    },
    getCartProductPrice: (state) => (productId) => {
      var item = state.cartProducts.filter(x => x.productId === productId)[0];
      return item.nr * item.productPrice;
    }
  },
  mutations: {
    addProductToCart (state, payload) {
      var existingCartProducts = state.cartProducts.filter(x => x.productId === payload.productId);
      if (existingCartProducts.length === 0) {
        state.cartProducts.push({ 
          productId: payload.productId, 
          productName: payload.name, 
          productPrice: payload.price, 
          picUrl: payload.picUrl,
          nr: 1 });
      } else {
        Vue.set(existingCartProducts[0], 'nr', existingCartProducts[0].nr + 1)
      }
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
