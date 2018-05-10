<template>
  <div class="md-layout">
    <div class="md-layout-item">
      <p v-if="getCartProductsCount == 0">Det finns inga produkter i varukorgen!</p>
      <div v-for="cartProduct in getCartProducts" :key="cartProduct.productId">
        <cart-product v-bind:cart-product="cartProduct" v-bind:key="cartProduct.productId"></cart-product>
      </div>
      <p v-if="getCartProductsCount > 0">Totalsumma: {{ getCartTotal }}</p>
    </div>
  </div>
</template>

<script>

import CartProduct from '@/components/CartProduct'

export default {
  name: 'CartPage',
  computed: {
    getCartProducts () {
      return this.$store.state.cartProducts;
    },
    getCartProductsCount () {
      return this.$store.getters.getCartProductsCount;
    }, 
    getCartTotal () {
      var total = 0;
      var items = this.$store.state.cartProducts;
      for (var i = 0; i < items.length; i++) {
        total += items[i].nr * items[i].productPrice;
      }

      return total;
    },
    noProducts () {
      return this.$store.getters.getCartProductsCount === 0; // TODO: fixa så kan kalla getCartProductsCount härifrån..
    }
  },
  components: {CartProduct}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
