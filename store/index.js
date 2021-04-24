export const state = () => ({
  products: [],
})

export const mutations = {
  async setProducts(state, { products }) {
    state.products = products
  },
}

export const getters = {
  products: () => state.products,
}

export const actions = {
  async addProduct(product) {
    state.products.push(product)
  },
  async removeProduct(product) {
    state.products.filter((item) => item.id !== product.id)
  },
}
