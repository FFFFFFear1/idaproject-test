<template>
  <div class="product-container">
    <div class="view">
      <div class="rating">
        <div>
          <img src="~/assets/images/Star.png" alt="" />
        </div>
        <p>4.5</p>
      </div>
      <div class="imageProduct">
        <img src="~/assets/images/Backpack.png" alt="imagePlace" />
      </div>
      <div class="add">
        <img src="~/assets/images/Shop.png" alt="" />
      </div>
    </div>
    <div class="description">
      <p class="name">Рюкзак Louis Vuitton Discovery</p>
      <p class="price">150 000 ₽</p>
    </div>
  </div>
</template>

<style scoped>
.view {
  margin: 0.5rem 1rem;
  height: 65%;
  display: grid;
  grid-template-columns: 20% 72% 10%;
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
  width: 150px;
  height: 180px;
  margin: 0.5rem auto 0 auto;
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
  font-size: 14px;
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
