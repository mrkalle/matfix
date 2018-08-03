<template>
  <div class="cartProduct">
    <md-card>
      <md-card-header>
        <div class="md-title">{{cartProduct.productName}}</div>
      </md-card-header>

      <md-card-media>
        <md-ripple>
          <img :src="cartProduct.picUrl">
        </md-ripple>
      </md-card-media>

      <md-card-content>
        Pris: {{cartProduct.nr}} x {{cartProduct.productPrice}} = {{getCartProductPrice}}kr
      </md-card-content>

      <md-card-actions>
        <md-button class="md-icon-button" v-on:click="decreaseProductInCart" >
          <md-icon>remove</md-icon>
        </md-button>
        <md-button class="md-icon-button" v-on:click="increaseProductInCart" >
          <md-icon>add</md-icon>
        </md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'CartProduct',
  props: ['cartProduct'],
  computed: {
    getCartProductPrice () {
      return this.$store.getters.getCartProductPrice(this.cartProduct.productId);
    }
  },
  methods: {
    increaseProductInCart: function () {
      this.$store.commit('increaseProductCountInCart', this.cartProduct.productId);
    },
    decreaseProductInCart: function () {
      this.$store.commit('decreaseProductCountInCart', this.cartProduct.productId);
    }
  }
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
.md-card-media {
  width: 50px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
}

.cartProduct {
  padding: 0px 30px 10px 30px;
  width: 300px;
}
</style>
