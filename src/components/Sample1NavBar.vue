<script setup>
import BaseNavBar from "./BaseNavBar.vue"
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route =useRoute()

const isModifyMyStore = computed(() => route.name==="ModifyMyStore")

const urlHome = import.meta.env.VITE_URL_HOME
const urlSearch = import.meta.env.VITE_URL_SEARCH

function changePage(page) {
  router.push({ name: page})
}

</script>

<template>
  <base-nav-bar>
    <div class="navbar-start">
      <a
        class="navbar-item"
        :href="urlHome"
      >
        ホーム
      </a>
      <a
          class="navbar-item"
          :href="urlSearch"
      >
        店舗を探す
      </a>
      <a
          class="navbar-item"
          :class="{ 'is-current': isModifyMyStore }"
          href="#"
          @click="changePage('ModifyMyStore')"
      >
        店舗を管理する
      </a>
    </div>
  </base-nav-bar>
</template>

<style scoped lang="scss">
.is-current {
  font-weight: bolder;
}
</style>