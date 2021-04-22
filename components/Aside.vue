<template>
  <div class="aside-container">
    <div class="aside-handler">
      <h2>Каталог</h2>
      <button>Рюкзаки</button>
      <button>Футболки</button>
      <button>Рубашки</button>
    </div>
  </div>
</template>

<style scoped>
button {
  padding: 0;
  cursor: pointer;
  text-align: left;
  background-color: white;
  border: none;
  font-size: 18px;
}
h2 {
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 1rem;
}
.aside-container {
  width: 200px;
}
.aside-handler {
  width: 200px;
  height: 180px;
  margin: 7rem 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
