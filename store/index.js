// export const state = () => ({
//   products: process.browser
//     ? JSON.parse(localStorage.getItem('savedProducts'))
//     : [],
// })

// export const mutations = {
//   async setProducts(state, { products }) {
//     state.products = products
//   },
// }

// export const getters = {
//   products: () => state.products,
// }

// export const actions = {
//   async addProduct(product) {
//     state.products.push(product)
//     console.log(JSON.parse(localStorage.getItem('savedProducts')))
//     localStorage.setItem('savedProducts', JSON.stringify(state.products))
//   },
//   async removeProduct(product) {
//     state.products.filter((item) => item.id !== product.id)
//     localStorage.setItem('savedProducts', JSON.stringify(state.products))
//   },
// }
