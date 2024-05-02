<script setup>
import {ref, watch, computed} from "vue";
import BaseInput from "./BaseInput.vue";

const props = defineProps({
  name: String,
  label: String,
  placeHolder: String,
  initialValue: String,
  message: String,
  isLoading: Boolean
})

const emit = defineEmits(['change'])
const isChange = computed(() => {
  const init = inputValue.value || ""
  const input = props.initialValue || ""
  return init !== input
})

watch(() => props.initialValue, (newValue) => {
  inputValue.value = newValue
});

const inputValue = ref("")

function onInput(e) {
  inputValue.value = e.target.value
  emit("change", {
    "value": inputValue.value,
    "isChange": isChange.value
  })
}
</script>

<template>
  <base-input
    :label="props.label"
    :message="props.message"
    :is-change="isChange"
    :is-loading="isLoading"
  >
    <input
      :id="name"
      class="input"
      type="text"
      :name="name"
      :value="inputValue"
      :placeholder="props.placeHolder"
      :disabled="isLoading"
      @input="onInput"
    >
  </base-input>
</template>

<style scoped lang="scss">

</style>