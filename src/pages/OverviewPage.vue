<template>
  <main class="grid grid-cols-2 gap-8 w-full h-full">
    <card-component class="max-h-[336px]">
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
    <card-component class="max-h-[336px]">
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
    <card-component class="col-span-2 flex-1">
      <div class="text-sm font-medium text-center text-gray-text border-b border-gray-200">
        <ul class="flex flex-wrap -mb-px">
          <li class="mr-2">
            <a href="#" class="tableTab" @click="selectedId = 1">Summary</a>
          </li>
          <li class="mr-2">
            <a href="#" class="tableTab" @click="selectedId = 2">Table</a>
          </li>
          <li class="mr-2">
            <a href="#" class="tableTab" @click="selectedId = 3">Charts</a>
          </li>
          <li class="mr-2">
            <a href="#" class="tableTab" @click="selectedId = 4">Reporting</a>
          </li>
          <li>
            <a href="#" class="tableTab" @click="selectedId = 5">Analysis</a>
          </li>
        </ul>
      </div>
      <div v-if="selectedId == 1" class="flex-col justify-center w-full mt-8 max-h-[360px]">
        <div v-for="coin in coinMarketData" :key="coin.id"
          class="flex justify-between items-center border border-gray-200 rounded-lg bg-white p-4 mb-2">
          <div class="flex-col justify-center">
            <div class="text-sm text-gray-text">{{ coin.symbol }}</div>
            <div class="text-sm text-black">{{ coin.name }}</div>
          </div>
          <div class="flex-col justify-center">
            <div class="text-sm text-gray-text">Price</div>
            <div class="text-sm text-black">{{ + (coin.quote.USD.price).toFixed(2) }}</div>
          </div>
          <div class="flex-col justify-center">
            <span class="text-sm text-gray-text">Change</span>
            <span class="flex items-center text-green text-sm">
              <span>{{ coin.quote.USD.volume_change_24h }}</span>
              <svg class="h-4 w-4" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="12" cy="12" r="9" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <polyline points="15 15 15 9 9 9" />
              </svg>
            </span>
          </div>
          <div class="flex-col justify-center items-center">
            <button-component>Sell</button-component>
            <button-component isPurple class="ml-2">Buy</button-component>
          </div>
        </div>
      </div>
      <div v-if="selectedId == 2" class="flex justify-center w-full mt-8">Table</div>
      <div v-if="selectedId == 3" class="flex justify-center w-full mt-8">Charts</div>
      <div v-if="selectedId == 4" class="flex justify-center w-full mt-8">Reporting</div>
      <div v-if="selectedId == 5" class="flex justify-center w-full mt-8">Analysis</div>

    </card-component>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import CardComponent from '../components/CardComponent.vue';
import ButtonComponent from '../components/ButtonComponent.vue';
import axios from 'axios'

export default defineComponent({
  name: 'OverviewPage',
  components: { CardComponent, ButtonComponent },
  setup() {
    const coinMarketData = ref()
    const selectedId = ref(1)

    axios.get('/api', {
      headers: {
        'X-CMC_PRO_API_KEY': 'cf03f1ca-7856-4e4d-967d-2e7240c27a9b',
      }
    })
      .then(response => {
        coinMarketData.value = response.data.data
        console.log(coinMarketData)
      })
      .catch(error => {
        console.log(error)
      })
    return {
      coinMarketData,
      selectedId
    }
  }
})
</script>

<style scoped>

</style>