<template>
  <div class="p-8 bg-gray-bg rounded-lg shadow-md">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CardComponent',
  setup() {


    return {}
  }
})
</script>

<style scoped>

</style>