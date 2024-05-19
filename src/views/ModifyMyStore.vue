<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const id = ref("")
const slug = ref("")
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

console.log(route.params.id)
console.log(id.value)
console.log(route.params.slug)
console.log(slug.value)
</script>

<template>
  ModifyMyStore
  {{ var1 }}
</template>

<style scoped lang="scss">
</style>