<template>
  <div class="container">
    <Aside />
    <ProductList />
  </div>
</template>

<script>
import Aside from '~/components/Aside'
import ProductList from '~/components/ProductList'
export default {
  components: {
    Aside,
    ProductList,
  },
}
</script>

<style>
.container {
  font-family: 'PT Sans', sans-serif;
  margin: 0 auto;
  /* min-height: 100vh; */
  width: 90%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  /* text-align: center; */
}
</style>
