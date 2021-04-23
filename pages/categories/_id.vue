<template>
  <div class="container">
    <ProductList v-bind:products="products" />
  </div>
</template>

<script>
import ProductList from '~/components/ProductList'
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
      try {
        const id =
          this.$route.params.id !== undefined ? this.$route.params.id : 1
        const response = await fetch(
          'https://frontend-test.idaproject.com/api/product?category=' +
            `${id}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        const result = response.json()
        result.then((value) => {
          if (value) {
            this.products = value
          }
        })
      } catch (error) {
        console.error('Error:', error)
      }
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
