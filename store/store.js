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
      localStorage.setItem('savedProducts', JSON.stringify(state.products))
    },
    async removeProduct(state, product) {
      state.products = state.products.filter((item) => item.id != product.id)
      localStorage.setItem('savedProducts', JSON.stringify(state.products))
    },
  },
  getters: {
    getProducts: (state) => {
      return state.products
    },
  },
})
