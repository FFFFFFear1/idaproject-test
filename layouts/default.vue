<template>
  <div>
    <Header v-bind:openShop="openShop" />
    <Aside />
    <Nuxt />
    <Shop v-if="shopIsOpen" v-bind:openShop="openShop" />
  </div>
</template>

<script>
import Header from '~/components/Header'
import Aside from '~/components/Aside'
import Shop from '~/components/modals/Shop'
export default {
  data() {
    return {
      shopIsOpen: false,
      shoppingBag: [],
    }
  },
  components: {
    Header,
    Aside,
    Shop,
  },
  methods: {
    openShop() {
      this.shopIsOpen = !this.shopIsOpen
    },
  },

  computed: {
    // products() {
    //   return this.$store.state.products
    // },
  },
  created() {
    // console.log(this.$store.state.products)
  },
}
</script>

<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
