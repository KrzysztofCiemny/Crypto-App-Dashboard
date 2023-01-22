<template>
  <main class="grid grid-cols-2 gap-8 w-full h-full">
    <card-component class="">
      <div class="flex justify-between items-center">
        <h2 class="text-black font-medium text-xl">Current Balance</h2>
        <svg class="h-6 w-6 cursor-pointer text-gray-text" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
          stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" />
          <circle cx="5" cy="12" r="1" />
          <circle cx="12" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
        </svg>
      </div>
      <span class="text-black font-medium text-[3.5rem]">
        <span class="text-gray-text">$</span>21 432.23
      </span>
      <div class="flex items-center text-green">
        <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
          fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" />
          <circle cx="12" cy="12" r="9" />
          <line x1="15" y1="9" x2="9" y2="15" />
          <polyline points="15 15 15 9 9 9" />
        </svg>
        <span class="pl-2 text-lg font-medium">12% vs one month</span>
      </div>
      <div>
        <button-component isPurple>Quick invest</button-component>
        <button-component>Show Report</button-component>
      </div>

    </card-component>
    <card-component class="">
      <div class="flex justify-between items-center">
        <h2 class="text-black font-medium text-xl">Summary</h2>
        <svg class="h-6 w-6 cursor-pointer text-gray-text" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
          stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" />
          <circle cx="5" cy="12" r="1" />
          <circle cx="12" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
        </svg>
      </div>
    </card-component>
    <card-component class="col-span-2">
      <div class="text-sm font-medium text-center text-gray-text border-b border-gray-200">
        <ul class="flex flex-wrap -mb-px">
          <li class="mr-2">
            <a href="#" class="tableTab">Summary</a>
          </li>
          <li class="mr-2">
            <a href="#" class="tableTab" aria-current="page">Table</a>
          </li>
          <li class="mr-2">
            <a href="#" class="tableTab">Charts</a>
          </li>
          <li class="mr-2">
            <a href="#" class="tableTab">Reporting</a>
          </li>
          <li>
            <a href="#" class="tableTab">Analysis</a>
          </li>
        </ul>
      </div>
    </card-component>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CardComponent from '../components/CardComponent.vue';
import ButtonComponent from '../components/ButtonComponent.vue';
import axios from 'axios'

export default defineComponent({
  name: 'OverviewPage',
  components: { CardComponent, ButtonComponent },
  setup() {

    return {
    }
  }
})
</script>

<style scoped>

</style>