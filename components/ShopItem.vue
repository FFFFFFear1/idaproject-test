<template>
  <div class="product-container">
    <div class="view">
      <div class="imageProduct">
        <img
          :src="'https://frontend-test.idaproject.com' + product.photo"
          alt="imagePlace"
        />
      </div>
    </div>
    <div class="description">
      <p class="name">{{ product.name }}</p>
      <p class="price">
        {{ new Intl.NumberFormat('ru-RU').format(product.price) }} ₽
      </p>
      <div class="rating">
        <div>
          <img src="~/assets/images/Star.png" alt="" />
        </div>
        <p>{{ product.rating }}</p>
      </div>
    </div>
    <div @click="deleteProduct()" class="delete">
      <img src="~/assets/images/Delete.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
    },
    deleteItem: {
      type: Function,
    },
  },

  methods: {
    async deleteProduct() {
      this.deleteItem(this.product.id)
    },
  },
}
</script>

<style scoped>
.delete {
  height: 2rem;
  margin: 0;
  cursor: pointer;

  display: flex;
  align-items: center;
  transition: 500ms;
}
.delete:hover {
  filter: contrast(10%);
  transition: 500ms;
}
.delete img {
  max-width: 25px;
  max-height: 25px;
  image-rendering: optimizeSpeed;
}

.imageProduct {
  width: 105px;
  height: 125px;
}
.imageProduct img {
  margin-top: 0.5rem;
  max-width: 100%;
  max-height: 100%;
  image-rendering: optimizeQuality;
}

.product-container {
  width: 100%;
  height: 120px;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.07);
}

.description {
  margin-right: 0.5rem;
  line-height: 25px;
  width: 160px;
  height: 90px;
}
.name {
  font-size: 16px;
  color: #6e747f;
  line-height: 20px;
}
.price {
  font-weight: 700;
  margin-bottom: 0.3rem;
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
