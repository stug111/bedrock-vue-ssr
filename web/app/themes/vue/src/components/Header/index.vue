<template>
  <header class="header">
    <div class="logo">
      Логотип
    </div>
    <nav>
      <ul>
        <li v-for="item in menu" :key="item.id">
          <a :href="item.url">{{ item.content }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    menu() {
      return this.$store.getters.menu('main')
    }
  }
}
</script>

<style scoped>
</style>
