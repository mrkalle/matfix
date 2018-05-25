<template>
  <div class="md-layout md-gutter">
    <div class="md-layout-item md-large-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100" v-for="product in getProducts" :key="product.productId">
      <product v-bind:product="product" v-bind:key="product.productId"></product>
    </div>

    <md-snackbar :md-position="position" :md-duration="duration" :md-active.sync="showSnackbar" transition="ui-snackbar-toggle">
      <span>Produkt tillagd i kundvagnen!</span>
    </md-snackbar>
  </div>  
</template>

<script>

import Product from '@/components/Product'

export default {
  name: 'ProductsPage',
  data: () => ({
    position: 'center',
    duration: 1500
  }),
  computed: {
    getProducts () {
      return this.$store.state.products;
    },
    showSnackbar () {
      return this.$store.state.showSnackbar;
    }
  },
  // method: {
  //   showSnackbar () {
  //     debugger;
  //   }
  // },
  // transitions: {
  //   'ui-snackbar-toggle': {
  //     afterEnter() {
  //         console.log('entered');
  //     },      
  //     afterLeave() {
  //         console.log('left');
  //     }
  //   }
  // },
  components: {Product}
}
</script>

<style lang="scss" scoped>
  @import "~vue-material/src/components/MdAnimation/variables.scss";
  @import "~vue-material/src/theme/engine";

  .md-layout-item {
    margin-top: 8px;
    margin-bottom: 8px;
    transition: .3s $md-transition-stand-timing;

    &:after {
      width: 100%;
      height: 100%;
      display: block;
      content: " ";
    }
  }
</style>
