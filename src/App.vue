<template>
  <div id="app">
    <md-tabs md-alignment="centered">
      <md-tab id="tab-products-page" md-label="Produkter">
        <products-page></products-page>
      </md-tab>
      <md-tab id="tab-cart-page" md-label="Varukorg">
        <cart-page></cart-page>
      </md-tab>
      <md-tab id="tab-about-page" md-label="Om">
        <about-page></about-page>
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
import ProductsPage from '@/components/ProductsPage'
import CartPage from '@/components/CartPage'
import AboutPage from '@/components/AboutPage'

export default {
  name: 'App',
  components: {ProductsPage, CartPage, AboutPage}
}

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  html {
    background-color: white!important;
  }
</style>
