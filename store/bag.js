import { Store } from 'vuex'

export default new Store({
  state: () => ({
    products: [],
  }),
  mutations: {
    setProducts(state) {
      state.counter++
    },
  },
  actions: {
    addProduct(state, { product }) {
      let arr = state.products.split(0)
      arr.push(product)
      this.commit('setProducts', arr)
    },
    remove(state, { emptyArr }) {
      this.commit('setProducts', emptyArr)
    },
  },
})

// export const getters = {
//   products: () => state.products,
// }

// попробовать изменять сдешний стейт
