<script setup>
</script>

<template>
  <font-awesome-icon
    icon="fa-solid fa-spinner"
    class="rotate"
  />
</template>

<style scoped lang="scss">
.rotate {
  --easeOutExpo: cubic-bezier(0.16, 1, 0.3, 1);
  transition: scale 0.6s var(--easeOutExpo);
  animation-name: rotate;
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
@keyframes rotate {
  0% {
    rotate: 0deg;
  }

  100% {
    rotate: 360deg;
  }
}
</style>