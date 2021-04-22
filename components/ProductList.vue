<template>
  <div class="containerList">
    <div class="selector">
      <label>Сортировать по: </label>
      <select name="" id="">
        <option value="цене">По цене</option>
        <option value="популярности">По популярности</option>
      </select>
    </div>
    <div class="list">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  </div>
</template>

<script>
import Product from '~/components/Product'
export default {
  components: { Product },
}
</script>

<style scoped>
.containerList {
  margin: 5rem 0 0 0;
}
.selector {
  margin: 2rem;
  display: flex;
  /* align-content: center; */
  justify-content: flex-end;
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
