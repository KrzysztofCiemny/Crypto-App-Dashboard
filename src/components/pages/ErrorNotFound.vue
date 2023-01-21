<template>
  <div class="flex items-center justify-center w-screen h-screen">
    <div class="flex-col items-center justify-center">
      <div class="text-3xl text-white mb-5">Oops. Nothing here...</div>
      <div class="w-full flex justify-center">
        <button type="button" @click="$router.push('/')"
          class="focus:outline-none text-white bg-purple hover:bg-violet-700 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">Lets
          go back</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ErrorNotFound',
  setup() {


    return {}
  }
})
</script>

<style scoped>

</style>