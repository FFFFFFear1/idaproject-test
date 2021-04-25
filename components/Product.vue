<template>
  <div id="product-container">
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
import { store } from '~/store/store'
import gsap from 'gsap'
export default {
  props: {
    product: {
      type: Object,
    },
  },
  methods: {
    async add() {
      let id = this.randomInteger(1, 9999999)
      await store.dispatch('addProduct', {
        id: id,
        photo: this.product.photo,
        name: this.product.name,
        price: this.product.price,
        rating: this.product.rating,
      })
    },
    randomInteger(min, max) {
      let rand = min - 0.5 + Math.random() * (max - min + 1)
      return Math.round(rand)
    },

    fadeIn(element) {
      if (document.querySelector(element)) {
        gsap.to(element, 0, {
          opacity: 0,
          y: 60,
          ease: 'power4.out',
          stagger: {
            amount: 0.5,
          },
        })
      }
    },
    fadeOut(element) {
      if (document.querySelector(element)) {
        gsap.to(element, 1, {
          opacity: 1,
          y: 0,
          ease: 'power4.out',
          stagger: {
            amount: 0.5,
          },
          delay: this.product.id * 0.005,
        })
      }
    },
  },
  created() {
    this.fadeIn('#product-container')
    this.fadeOut('#product-container')
  },
}
</script>

<style>
#product-container {
  width: 264px;
  height: 272px;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.07);
}
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
