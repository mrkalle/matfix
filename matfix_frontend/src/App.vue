<template>
  <div id="app">
    <md-tabs class="md-primary" md-alignment="centered" :md-active-tab=currentTab @md-changed="currentTabChanged">
      <template slot="md-tab" slot-scope="{ tab }">
        {{ tab.label }} <i class="badge" v-if="tab.data.badge">{{ tab.data.badge }}</i>
      </template>

      <md-tab id="tab-products-page" md-label="Produkter">
        <products-page></products-page>
      </md-tab>
      <md-tab id="tab-cart-page" md-label="Varukorg" :md-template-data="{ badge: cartProducts }">
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
  components: {ProductsPage, CartPage, AboutPage},
  computed: {
    cartProducts () {
      return this.$store.getters.getAllCartProductsCount;
    },
    currentTab () {
      return this.$store.getters.getCurrentTab;
    }
  },
  methods: {
    currentTabChanged (tabId) {
      this.$store.commit("setCurrentTab", tabId);
    }
  }
}

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    min-height: 100vh;
  }
  
  .md-content {
    min-height: 100vh;
  }

  html {
    background-color: white!important;
  }
</style>

<style lang="scss" scoped>
  .badge {
    width: 19px;
    height: 19px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 2px;
    right: 2px;
    background: red;
    border-radius: 100%;
    color: #fff;
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: -.05em;
    font-family: 'Roboto Mono', monospace;
  }
</style>

<!--<style lang="scss" scoped>
  .md-tabs + .md-tabs {
    margin-top: 60px;
  }
</style>-->