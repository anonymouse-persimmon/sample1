<script setup>

const props = defineProps({
  label: String,
  isChange: Boolean,
  placeHolder: String,
  initialValue: String,
  message: String,
  isLoading: Boolean
})

</script>

<template>
  <div class="field">
    <label class="label">
      {{ props.label }}
      <span
        v-show="isChange"
        class="has-text-info"
      >
        *
      </span>
    </label>
    <div
      class="control"
      :class="{'is-loading':isLoading}"
    >
      <slot />
    </div>
    <p class="help is-danger">
      {{ message }}
    </p>
  </div>
</template>

<style scoped lang="scss">

</style>