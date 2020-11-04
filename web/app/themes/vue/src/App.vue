<template>
  <div id="app">
    Hello
    <router-view />
  </div>
</template>

<script>
export default {
    computed: {
      menus() {
        return this.$store.getters["site/getMenus"]
      }
    }
}
</script>
