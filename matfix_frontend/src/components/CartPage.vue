<template>
  <div class="cartPage">
    <div class="md-layout">
      <div class="md-layout-item">
        <p v-if="getCartProductsCount == 0">Det finns inga produkter i varukorgen!</p>
        <div v-for="cartProduct in getCartProducts" :key="cartProduct.productId">
          <cart-product v-bind:cart-product="cartProduct" v-bind:key="cartProduct.productId"></cart-product>
        </div>
        <p v-if="getCartProductsCount > 0">Totalsumma: {{ getCartTotal }}kr</p>
        <md-button v-if="getCartProductsCount > 0" class="md-primary md-raised" @click="onPayButtonPressed">Betala</md-button>
      </div>
    </div>
    <div>
      <md-dialog
        :md-active.sync="activePayDialog" md-fullscreen="false">

        <md-dialog-title>Betala {{ getCartTotal }}kr</md-dialog-title>
        
        <md-dialog-content>
          <p>
            1. Scanna QR-koden med din mobil med Swish-appen. Om du är på din mobil ta en screenshot och öppna bilden i Swish-appen. Vill du inte scanna QR-koden så kan du skicka totalbeloppet till 070-1464670.
          </p>
          <img :src="qrCode" alt="The QR code"/>
          <p>
            2. Betala i Swish.
          </p>
          <p>
            3. När betalningen är klar tryck på 'Betalning klar'-knappen.
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
import axios from 'axios'

export default {
  name: 'CartPage',
  data: () => ({
    activePayDialog: false,
    qrCode: null
  }),
  methods: {
    onPayButtonPressed () {
      this.activePayDialog = true;
      this.qrCode = "https://matfix.carllundin.se/createqrcode?amount=" + this.getCartTotal;   
    },
    onConfirm () {
      this.activePayDialog = false;
      this.$store.commit("clearCart");
      
      this.$ga.event({
        eventCategory: 'paymentConfirmed',
        eventAction: 'click'
      })
    },
    onCancel () {
      this.activePayDialog = false;
      
      this.$ga.event({
        eventCategory: 'paymentCanceled',
        eventAction: 'click'
      })
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
      return this.$store.getters.getCartProductsCount === 0;
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
