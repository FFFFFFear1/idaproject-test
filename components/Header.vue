<template>
  <header>
    <div class="header__title">
      <h2>TestList</h2>
    </div>
    <div class="header__shop-btn">
      <div class="header__shop-img">
        <div class="count" v-if="products !== undefined && products.length > 0">
          {{ products.length }}
        </div>
        <img @click="openShop" src="~/assets/images/Shop.png" alt="shopImage" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    openShop: {
      type: Function,
    },
    products: {
      type: Array | [],
    },
  },
}
</script>

<style scoped>
header {
  font-family: 'PT Sans', sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

  height: 66px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  background-color: white;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
}
.header__title {
  margin-left: 4vw;
  margin-top: 1.3rem;
  color: grey;
  font-size: 15px;
}
.header__shop-btn {
  height: auto;
  width: 120px;
  margin-top: 1.3rem;
}
.header__shop-btn img {
  cursor: pointer;
  max-width: 27px;
  max-height: 27px;
  transition: 500ms;
}
.header__shop-btn img:hover {
  filter: contrast(10%);
  transition: 500ms;
}
.count {
  z-index: 2;
  font-size: 12px;
  color: white;
  text-align: center;
  width: 15px;
  position: fixed;
  top: 0.85rem;
  right: 90px;
  background-color: gray;
  border-radius: 50%;
}
</style>
