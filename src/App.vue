<script setup>
</script>

<template>
  <div>
    <router-link to="home">hello world1</router-link>
    <br>
    <router-link to="home2">hello world2</router-link>
    <br>
    <a href="/detail/home3" target="_blank">hello world3</a>
  </div>
  <router-view />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
