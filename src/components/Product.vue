<template>
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <md-card class="product">
      <md-card-header>
        <div class="md-title">{{product.name}}</div>
      </md-card-header>

      <md-card-media>
        <md-ripple>
          <img :src="product.picUrl">
        </md-ripple>
      </md-card-media>

      <md-card-content>
        Pris: {{product.price}}kr
      </md-card-content>

      <md-card-actions>
        <md-button class="md-icon-button md-primary" v-on:click="addProductToCart" >
          <md-icon class="fa fa-cart-plus"></md-icon>
        </md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: ['product'],
  methods: {
    addProductToCart: function () {
      this.$store.commit('addProductToCart', this.product)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}

.md-card-media {
  width: 50px;
  height: 50px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

/*.product {
  padding: 0px 30px 10px 30px;
  width: 300px;
}*/
</style>
