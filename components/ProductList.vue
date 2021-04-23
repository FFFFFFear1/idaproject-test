<template>
  <div class="containerList">
    <div class="selector">
      <label>Сортировать: </label>
      <select
        @change="(value) => sort(value.target.value)"
        :value="selected"
        v-model="selected"
      >
        <option selected disabled value="">не выбрано</option>
        <option value="price">по цене</option>
        <option value="rating">по популярности</option>
      </select>
    </div>
    <div class="list">
      <Product
        v-for="product in products"
        :key="product.index"
        v-bind:product="product"
      />
    </div>
  </div>
</template>

<script>
import Product from '~/components/Product'
export default {
  data() {
    return {
      selected: '',
    }
  },
  props: {
    products: {
      type: Array,
    },
    sortingRating: {
      type: Function,
    },
    sortingPrice: {
      type: Function,
    },
  },
  components: { Product },
  methods: {
    sort(param) {
      console.log(param)
      return param === 'price' ? this.sortingPrice() : this.sortingRating()
    },
  },
}
</script>

<style scoped>
.containerList {
  margin: 5rem 0 0 12rem;
}
.selector {
  margin: 2rem;
  display: flex;
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
