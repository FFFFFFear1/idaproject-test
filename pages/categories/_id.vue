<template>
  <div class="container">
    <ProductList
      v-bind:products="products"
      v-bind:sortingRating="sortingRating"
      v-bind:sortingPrice="sortingPrice"
    />
  </div>
</template>

<script>
import ProductList from '~/components/ProductList'
import * as Enumerable from 'linq'
export default {
  data() {
    return {
      products: [],
    }
  },
  components: {
    ProductList,
  },
  methods: {
    async getProduct() {
      const id = this.$route.params.id !== undefined ? this.$route.params.id : 1
      this.products = await this.$axios.$get(
        'https://frontend-test.idaproject.com/api/product?category=' + `${id}`
      )
    },
    sortingRating() {
      let newArr = Enumerable.from(this.products)
        .orderByDescending((item) => item.rating)
        .toArray()
      this.products = newArr
    },
    sortingPrice() {
      let newArr = Enumerable.from(this.products)
        .orderBy((item) => item.price)
        .toArray()
      this.products = newArr
    },
  },
  created() {
    this.getProduct()
  },
}
</script>

<style scoped>
.container {
  font-family: 'PT Sans', sans-serif;
  margin: 0 auto;
  width: 90%;
  display: flex;
  justify-content: center;
}
</style>
