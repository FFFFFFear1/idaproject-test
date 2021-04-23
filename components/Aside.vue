<template>
  <div v-if="Categories.length !== 0" class="aside-container">
    <div class="aside-handler">
      <h2>Каталог</h2>
      <nuxt-link
        class="nav-btn"
        active-class="active"
        :to="
          category.id !== Categories[0].id
            ? '/categories/' + category.id
            : '/categories'
        "
        :exact="category.id !== Categories[0].id ? false : true"
        v-for="category in Categories"
        :key="category.id"
      >
        {{ category.name }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Categories: [],
    }
  },
  methods: {
    async getCategory() {
      try {
        const response = await fetch(
          'https://frontend-test.idaproject.com/api/product-category',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        const result = response.json()
        result.then((value) => {
          if (value) {
            this.Categories = value
          }
        })
      } catch (error) {
        console.error('Error:', error)
      }
    },
  },
  created() {
    this.getCategory()
  },
}
</script>

<style scoped>
h2 {
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 0.5rem;
}
.nav-btn {
  font-family: 'PT Sans', sans-serif;
  text-decoration: none;
  padding: 0;
  cursor: pointer;
  text-align: left;
  background-color: white;
  border: none;
  font-size: 16px;
  color: rgb(184, 184, 184);
  transition: 500ms;
}
.nav-btn:hover {
  color: rgb(0, 0, 0);
  transition: 500ms;
}
.active {
  text-decoration: underline;
  color: rgb(0, 0, 0);
}
.aside-container {
  position: fixed;
  top: 6rem;
  left: 4vw;
}
.aside-handler {
  font-family: 'PT Sans', sans-serif;
  width: 160px;
  height: 160px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
