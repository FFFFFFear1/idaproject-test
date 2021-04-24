<template>
  <div>
    <Header v-bind:openShop="openShop" v-bind:products="products" />
    <Shop
      v-if="shopIsOpen"
      v-bind:submiting="submiting"
      v-bind:submit="submit"
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
      submiting: false,
    }
  },
  components: {
    Header,
    Aside,
    Shop,
  },
  async mounted() {
    if (localStorage.getItem('savedProducts').trim()) {
      const saved =
        process.browser && JSON.parse(localStorage.getItem('savedProducts'))
      await store.commit('SET_PRODUCTS', saved)
    } else {
      await store.commit('SET_PRODUCTS', [])
    }
  },
  methods: {
    openShop() {
      this.shopIsOpen = !this.shopIsOpen
      this.submiting = this.shopIsOpen === false
    },
    submit() {
      store.commit('SET_PRODUCTS', [])
      this.submiting = true
    },
    async deleteItem(id) {
      await store.dispatch('removeProduct', {
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
