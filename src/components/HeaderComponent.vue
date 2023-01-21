<template>
  <header class="flex items-center  pt-12 rounded-tr-xl grow max-h-32">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <div class="flex md:order-2">
        <div class="relative hidden md:block">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-text" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"></path>
            </svg>
            <span class="sr-only">Search icon</span>
          </div>
          <input type="text" id="search-navbar"
            class="block w-full p-3 pl-10 text-sm text-gray-text border border-white rounded-lg bg-gray-bg focus:border-purple focus:ring-purple focus:ring-1 focus:outline-none"
            placeholder="Search...">
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <div
        class="relative flex justify-center items-center cursor-pointer text-gray-text mr-4 w-12 h-12 focus:outline-none rounded-lg bg-gray-bg">
        <svg class="h-6 w-6" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
          fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" />
          <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
          <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
        </svg>
        <div class="absolute inline-flex items-center justify-center w-3 h-3 bg-red rounded-full -top-0.5 -right-0.5">
        </div>
      </div>
      <nav>
        <button type="button" class="text-gray-text w-12 h-12 relative focus:outline-none rounded-lg bg-gray-bg"
          @click="open = !open">
          <div class="block w-4 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
            <span aria-hidden="true"
              class="block absolute h-0.5 w-4 bg-current transform transition duration-500 ease-in-out"
              :class="{ 'rotate-45': open, ' -translate-y-1.5': !open }"></span>
            <span aria-hidden="true"
              class="block absolute  h-0.5 w-4 bg-current   transform transition duration-500 ease-in-out"
              :class="{ 'opacity-0': open }"></span>
            <span aria-hidden="true"
              class="block absolute  h-0.5 w-4 bg-current transform  transition duration-500 ease-in-out"
              :class="{ '-rotate-45': open, ' translate-y-1.5': !open }"></span>
          </div>
        </button>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'


export default defineComponent({
  name: 'HeaderComponent',

  setup() {
    const open = ref(false)

    return {
      open
    }
  }
})
</script>

<style scoped>

</style>