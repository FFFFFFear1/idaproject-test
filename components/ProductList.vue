<template>
  <div class="containerList">
    <div class="selector">
      <label>Сортировать: </label>
      <select name="" id="">
        <option value="цене">по цене</option>
        <option value="популярности">по популярности</option>
      </select>
    </div>
    <div class="list">
      <Product
        v-for="product in products"
        :key="product.index"
        v-bind:id="product.id"
        v-bind:name="product.name"
        v-bind:photo="product.photo"
        v-bind:price="product.price"
        v-bind:rating="product.rating"
      />
    </div>
  </div>
</template>

<script>
import Product from '~/components/Product'
export default {
  props: {
    products: {
      type: Array,
    },
  },
  components: { Product },
}
</script>

<style scoped>
.containerList {
  margin: 5rem 0 0 12rem;
}
.selector {
  margin: 2rem;
  display: flex;
  /* align-content: center; */
  justify-content: flex-end;
}
select {
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.list {
  width: 70rem;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
}
.item {
  width: 264px;
  height: 272px;
  border: 1px solid black;
  margin-bottom: 3rem;
}
</style>
