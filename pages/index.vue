<template></template>
<script>
export default {
  data() {
    return {
      shoppingBag: [],
    }
  },
  methods: {},
  created() {
    if (!this.$router.history.current.path.includes('/categories')) {
      this.$router.replace({ path: '/categories' })
    }
  },
}
</script>
