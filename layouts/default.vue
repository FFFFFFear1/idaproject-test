<template>
  <div>
    <Header v-bind:openShop="openShop" v-bind:products="products" />
    <Shop
      v-if="shopIsOpen"
      v-bind:products="products"
      v-bind:openShop="openShop"
      v-bind:deleteItem="deleteItem"
    />
    <Aside />
    <Nuxt />
  </div>
</template>

<script>
import { store } from '~/store/store'
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
    async deleteItem(id) {
      await store.commit('removeProduct', {
        id: id,
      })
    },
  },
  computed: {
    products() {
      return store.getters.getProducts
    },
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
