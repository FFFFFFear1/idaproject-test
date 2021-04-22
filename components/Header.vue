<template>
  <header>
    <div class="header__title">
      <h2>TestList</h2>
    </div>
    <div class="header__shop-btn">
      <div class="header__shop-img">
        <img src="~/assets/images/Shop.png" alt="shopImage" />
      </div>
    </div>
  </header>
</template>

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
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.12);
}
.header__title {
  margin-left: 55px;
  margin-top: 1.3rem;
  color: grey;
}
.header__shop-btn {
  height: auto;
  width: 100px;
  margin-top: 1.3rem;
}
.header__shop-btn img {
  max-width: 27px;
  max-height: 27px;
}
</style>
