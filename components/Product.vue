<template>
  <div class="product-container">
    <div class="view">
      <div class="rating">
        <div>
          <img src="~/assets/images/Star.png" alt="" />
        </div>
        <p>{{ product.rating }}</p>
      </div>
      <div class="imageProduct">
        <img
          :src="'https://frontend-test.idaproject.com' + product.photo"
          alt="imagePlace"
        />
      </div>
      <div class="add">
        <img @click="add" src="~/assets/images/Shop.png" alt="" />
      </div>
    </div>
    <div class="description">
      <p class="name">{{ product.name }}</p>
      <p class="price">
        {{ new Intl.NumberFormat('ru-RU').format(product.price) }} ₽
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  // computed: {
  //   products() {
  //     return this.$store.state.products
  //   },
  // },
  props: {
    product: {
      type: Object,
    },
  },
  methods: {
    ...mapActions(['bag/addProduct']),
    async add(product) {
      // await this.$store.dispatch('store/setProducts', product)

      await this.$store.dispatch('store/addProduct', product)
      console.log(this.$store.getters['store/products'])
    },
    // async add() {
    //   await this.$store.commit('setProducts', [])
    //   await this.$store.dispatch('index/products')
    //   console.log(newArr)

    //   // newArr.push(this.product)
    //   // this.$store.dispatch('index/addProduct', newArr)
    //   // this.$store.commit('setProducts', newArr)
    //   // console.log(this.$store.state.products)

    //   // console.log(this.$store.state.products)
    //   // if (this.$store.getters['index/products'].length == 0) {
    //   //   console.log(this.$store.state.products, true)
    //   // }
    //   // this.$store.commit('setProducts', this.product)
    //   // console.log(this.$store.state.products)
    // },
  },
}
</script>

<style scoped>
.view {
  margin: 0.5rem 1rem;
  height: 65%;
  display: flex;
  justify-content: flex-start;
}

.add {
  height: 2rem;
  margin: 0;
  cursor: pointer;

  display: flex;
  align-items: center;
  transition: 500ms;
}
.add:hover {
  filter: contrast(10%);
  transition: 500ms;
}
.add img {
  max-width: 15px;
  max-height: 15px;
  image-rendering: optimizeSpeed;
}

.imageProduct {
  width: 180px;
  height: 22 0px;
  margin: 0.5rem 0 auto;
}
.imageProduct img {
  max-width: 100%;
  max-height: 100%;
  image-rendering: optimizeQuality;
}

.product-container {
  width: 264px;
  height: 272px;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.07);
}

.description {
  margin: 1rem;
}
.name {
  font-size: 12px;
  color: #6e747f;
  line-height: 35px;
}
.price {
  font-weight: 700;
}

.rating {
  color: #f2c94c;
  font-weight: bold;
  font-size: 13px;
  height: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.rating img {
  max-width: 25px;
  max-height: 25px;
  image-rendering: optimizeQuality;
}
</style>
