<template>
  <div>
    <Header v-bind:openShop="openShop" v-bind:products="products" />
    <Shop
      v-bind:submiting="submiting"
      v-bind:submit="submit"
      v-bind:products="products"
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
import gsap from 'gsap'
export default {
  data() {
    return {
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
    submit() {
      store.commit('SET_PRODUCTS', [])
      this.submiting = true
    },
    async deleteItem(id) {
      await store.dispatch('removeProduct', {
        id: id,
      })
    },

    openShopAnim(element) {
      if (document.querySelector(element)) {
        gsap.to(element, 1, {
          right: 0,
          ease: 'power4.out',
          stagger: {
            amount: 0.5,
          },
        })
      }
    },
    openBackAnim(element) {
      if (document.querySelector(element)) {
        gsap.to(element, 2, {
          left: 0,
          ease: 'power4.out',
          stagger: {
            amount: 0.5,
          },
        })
      }
    },
    openShop() {
      this.openShopAnim('.shop')
      this.openBackAnim('#background')
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
