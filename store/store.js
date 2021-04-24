import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    products: [],
  },
  mutations: {
    async setProducts(state, products) {
      state.products = products
    },
    async addProduct(state, newProduct) {
      state.products.push(newProduct)
    },
    async removeProduct(state, product) {
      state.products = state.products.filter((item) => item.id != product.id)
      // state.products = state.products.filter((item) => item.id === product.id)
    },
  },
  getters: {
    getProducts: (state) => {
      return state.products
    },
  },
})
