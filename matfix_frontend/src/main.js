// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'es6-promise/auto'
import axios from 'axios'
import Vuex from 'vuex'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(Vuex)
Vue.use(VueMaterial)

const store = new Vuex.Store({
  state: {
    products: [],
    cartProducts: []
  },
  getters: {
    getCartProductsCount: (state) => {
      return state.cartProducts.length;
    },
    getCartProductCount: (state) => (productId) => {
      return state.cartProducts.filter(x => x.productId === productId).length;
    },
    getAllCartProductsCount: (state) => {
      var totalNrOfProducts = 0;
      for (var i = 0; i < state.cartProducts.length; i++) {
        totalNrOfProducts += state.cartProducts[i].nr;
      } 

      return totalNrOfProducts;
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
    },
    addProductsToCart(state, payload) {
      var dataObj = {productId: payload.productId, name: payload.name, price: payload.price, picUrl: payload.picUrl};
      state.products.push(dataObj);
    },
    clearCart (state) {
      state.cartProducts.splice(0, state.cartProducts.length);
    }
  },
  actions: {
	  fetchProducts (state) {
      axios.get('http://localhost:3030/products')
      .then(response => {
        for (var i = 0; i < response.data.length; i++) {
          state.commit("addProductsToCart", response.data[i]);
        }
      })
      .catch(e => {
        debugger;
        console.error("fetchProducts, error: " + e);
      });
	  }	  
  }  
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>',
  mounted: function() {
	  store.dispatch('fetchProducts');
  }
})
