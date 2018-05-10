<template>
  <div class="cartPage">
    <div class="md-layout">
      <div class="md-layout-item">
        <p v-if="getCartProductsCount == 0">Det finns inga produkter i varukorgen!</p>
        <div v-for="cartProduct in getCartProducts" :key="cartProduct.productId">
          <cart-product v-bind:cart-product="cartProduct" v-bind:key="cartProduct.productId"></cart-product>
        </div>
        <p v-if="getCartProductsCount > 0">Totalsumma: {{ getCartTotal }}</p>
        <md-button v-if="getCartProductsCount > 0" class="md-primary md-raised" @click="activePayDialog = true">Betala</md-button>
      </div>
    </div>
    <div>
      <md-dialog
        :md-active.sync="activePayDialog" md-fullscreen="false" md-click-outside-to-close="false">

        <md-dialog-title>Betalning</md-dialog-title>
        
        <md-dialog-content>
          <p>
            1. Scanna QR-koden med din mobil (om du är på din mobil ta en screenshot och öppna bilden i Swish-appen).
            <img src="../../static/qr_test.png">
          </p>
          <p>
            2. Betala med Swish.
          </p>
          <p>
            3. Tryck på 'Betalning klar'.
          </p>
        </md-dialog-content>

        <md-dialog-actions>
          <md-button class="md-accent" @click="onCancel">Avbryt</md-button>
          <md-button class="md-primary" @click="onConfirm">Betalning klar</md-button>
        </md-dialog-actions>  

      </md-dialog>
    </div>        

  </div>
</template>

<script>

import CartProduct from '@/components/CartProduct'

export default {
  name: 'CartPage',
  data: () => ({
    activePayDialog: false
  }),
  methods: {
    onConfirm () {
      this.activePayDialog = false;
      this.$store.commit("clearCart");
    },
    onCancel () {
      this.activePayDialog = false;
    }
  },
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
