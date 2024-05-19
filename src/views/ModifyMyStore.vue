<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import {useAuth0} from "@auth0/auth0-vue";
import {callUserFetch} from "../api/sampleAPI"
const { user, getAccessTokenSilently } = useAuth0()

const route = useRoute()

const var1 = import.meta.env.VITE_URL_ENV_TEST
watch(
    () => route.params.id, (newId, oldId) => {
      console.log("id change: " + oldId + " → " + newId)
    })
watch(
    () => route.params.slug, (newSlug, oldSlug) => {
      console.log("slug change: " + oldSlug + " → " + newSlug)
    }
)

onMounted(async () => {
  const token = await getAccessTokenSilently()
  const u = await callUserFetch(token, user.value.sub)
  console.log(u)
})
</script>

<template>
  {{ user.sub }}
</template>

<style scoped lang="scss">
</style>