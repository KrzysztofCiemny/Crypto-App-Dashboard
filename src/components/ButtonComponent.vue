<template>
  <button type="button" class="focus:outline-none  border font-medium rounded-lg text-sm px-5 py-2.5 mb-2 "
    :class="isPurple ? 'bg-purple hover:bg-violet-700 border-purple text-white' : 'bg-white hover:bg-[#EBEBF3] border-[#EBEBF3] text-purple'">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    isPurple: {
      type: Boolean,
    },
  },
  setup() {


    return {}
  }
})
</script>

<style scoped>

</style>