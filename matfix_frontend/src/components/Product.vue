<template>
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <md-card class="product">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{product.name}}</div>
          <div class="md-subhead">Pris: {{product.price}}kr</div>
        </md-card-header-text>

        <md-card-media md-big>
          <img :src="product.picUrl">
        </md-card-media>
      </md-card-header>

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
      this.$store.commit('addProductToCart', this.product);
      this.$store.commit('setShowSnackbar', true);
      this.$store.dispatch('setHideSnackbar');

      this.$ga.event({
        eventCategory: this.product.name,
        eventAction: 'add'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.md-card-media img {
  width: 100px;
  /*display: block;*/
  margin-left: auto;
  margin-right: auto;
}

</style>
