export const bagState = () => {
  products: []
}

export const mutations = {
  setBagState(state, products) {
    state.products = products
  },
}

export const actions = {
  addProduct(products) {
    bagState.products.push(products)
    console.log(bagState)
  },
}

export const getters = {
  products: (s) => s.products,
}
