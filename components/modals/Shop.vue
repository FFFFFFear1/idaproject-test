<template>
  <div id="background">
    <div class="shop">
      <div class="content">
        <div class="shop-title">
          <h2>Корзина</h2>
          <button @click="closeShopTrigger" class="exit-btn" />
        </div>
        <div v-if="products.length > 0">
          <div class="items">
            <span class="section-title">Товары в корзине</span>
            <div class="itemList">
              <ShopItem
                v-for="product in products"
                :key="product.id"
                v-bind:product="product"
                v-bind:deleteItem="deleteItem"
              />
            </div>
          </div>
          <form @submit.prevent="submit" id="info" class="form" action="">
            <span class="section-title">Оформить заказ</span>
            <input
              type="text"
              pattern="^[A-Za-zА-Яа-яЁё]+$"
              placeholder="Ваше имя"
              required
            />
            <input
              type="text"
              v-mask="'+7 (###) ###-##-##'"
              v-model="inputPhoneModel"
              placeholder="Телефон"
              required
            />
            <input type="text" placeholder="Адрес" required />
            <button type="submit" class="submit-data">Отправить</button>
          </form>
        </div>

        <div v-else-if="submiting">
          <div class="success">
            <div class="success-img">
              <img src="~/assets/images/OK.png" alt="okImage" />
            </div>
            <p class="success-title">Заявка успешно отправлена</p>
            <p class="success-description">
              Вскоре наш менеджер свяжется с Вами
            </p>
          </div>
        </div>

        <div v-else class="placeholder">
          <p>Пока что вы ничего не добавили в корзину.</p>
          <button @click="closeShopTrigger" class="submit-data">
            Перейти к выбору
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShopItem from '~/components/ShopItem'
import gsap from 'gsap'
export default {
  data() {
    return {
      inputPhoneModel: '',
    }
  },
  props: {
    openShop: {
      type: Function,
    },
    products: {
      type: Array | [],
    },
    deleteItem: {
      type: Function,
    },
    submiting: {
      type: Boolean,
    },
    submit: {
      type: Function,
    },
  },
  components: { ShopItem },
  methods: {
    closeShopAnim(element) {
      if (document.querySelector(element)) {
        gsap.to(element, 0.5, {
          right: '-100%',
          ease: 'power4.out',
          stagger: {
            amount: 0.5,
          },
        })
      }
    },
    closeBackAnim(element) {
      if (document.querySelector(element)) {
        gsap.to(element, 0.5, {
          left: '100%',
          ease: 'power4.out',
          stagger: {
            amount: 0.5,
          },
        })
      }
    },
    closeShopTrigger() {
      this.closeShopAnim('.shop')
      this.closeBackAnim('#background')
    },
  },
}
</script>

<style scoped>
input {
  border: none;
  padding: 15px;
  border-radius: 0.5rem;
  background-color: #f8f8f8;
  margin: 1rem 0;
  font-size: 18px;
}
#background {
  position: fixed;
  z-index: 3;
  top: 0;
  bottom: 0;
  right: 0;
  left: 100%;
  background-color: rgba(255, 255, 255, 0.74);
}
.shop {
  position: fixed;
  font-family: 'PT Sans', sans-serif;
  z-index: 4;
  width: 32rem;
  height: 100%;
  right: -100%;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.175);
  background-color: white;
}
.content {
  padding: 3rem;
}
.shop-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
  margin-bottom: 2rem;
}
.exit-btn {
  cursor: pointer;
  font-weight: 700;
  height: 2rem;
  width: 2rem;
  border: none;
  background-color: white;
  background: url('~/assets/images/Exit.svg');
  background-repeat: no-repeat;
  background-position: center;
}
.itemList {
  margin-top: 1rem;
  margin-bottom: 2rem;
}
.form {
  display: flex;
  flex-direction: column;
}
.section-title {
  color: #59606d;
  font-size: 20px;
}
.submit-data {
  cursor: pointer;
  padding: 15px;
  color: #ffffff;
  background-color: black;
  border-radius: 0.5rem;
  margin: 1rem 0;
  border: none;
}

.placeholder {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 28px;
  height: 180px;
}

.success {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50rem;
}
.success-img {
  width: 90px;
  height: 90px;
  margin-bottom: 1rem;
}
.success-img img {
  max-width: 100%;
  max-height: 100%;
}
.success-title {
  font-weight: 700;
  font-size: 25px;
}
.success-description {
  color: #59606d;
  font-size: 16px;
}
</style>
