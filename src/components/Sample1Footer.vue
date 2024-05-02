<script setup>
import BaseFooter from "./BaseFooter.vue"
import { useRouter } from 'vue-router'

const router = useRouter()

const urlHome = import.meta.env.VITE_URL_HOME
const urlPrivacyPolicy = import.meta.env.VITE_PRIVACY_POLICY
const urlTermOfUse = import.meta.env.VITE_TERM_OF_USE

function changePage(page) {
  router.push({ name: page})
}

</script>

<template>
  <base-footer>
    <a
      :href="urlHome"
    >Sample</a>
    &nbsp;|&nbsp;
    <a
      :href="urlPrivacyPolicy"
    >
      プライバシーポリシー
    </a>
    &nbsp;|&nbsp;
    <a
      :href="urlTermOfUse"
    >利用規約</a>
  </base-footer>
</template>

<style scoped lang="scss">

</style>