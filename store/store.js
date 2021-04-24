import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    products: [],
  },
  mutations: {
    async SET_PRODUCTS(state, product) {
      state.products = product
      localStorage.setItem('savedProducts', JSON.stringify(this.state.products))
    },
    async ADD_PRODUCT(state, product) {
      state.products.push(product)
      localStorage.setItem('savedProducts', JSON.stringify(this.state.products))
    },
    async REMOVE_PRODUCT(state, product) {
      state.products = state.products.filter((item) => item.id != product.id)
      localStorage.setItem('savedProducts', JSON.stringify(this.state.products))
    },
  },
  actions: {
    async addProduct({ commit }, newProduct) {
      commit('ADD_PRODUCT', newProduct)
    },
    async removeProduct({ commit }, product) {
      commit('REMOVE_PRODUCT', product)
    },
  },
  getters: {
    getProducts: (state) => {
      return state.products
    },
  },
})
