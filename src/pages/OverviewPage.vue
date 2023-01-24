<template>
  <main class="grid grid-cols-2 gap-4 lg:gap-8 w-full">
    <card-component class="col-span-2 sm:col-auto">
      <div class="flex flex-col justify-between h-full">
        <div class="flex justify-between items-center mb-5 xl:mb-10">
          <h2 class="text-black font-medium text-lg lg:text-xl">Current Balance</h2>
          <svg class="h-6 w-6 cursor-pointer text-gray-text" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
            stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <circle cx="5" cy="12" r="1" />
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
          </svg>
        </div>
        <div class="flex flex-col mb-10 xl:mb-[72px]">
          <span class="text-black font-medium text-3xl md:text-4xl lg:text-5xl">
            <span class="text-gray-text">$</span>21 432.23
          </span>
          <div class="flex items-center text-green">
            <svg class="h-4 w-4 lg:h-5 lg:w-5" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx="12" cy="12" r="9" />
              <line x1="15" y1="9" x2="9" y2="15" />
              <polyline points="15 15 15 9 9 9" />
            </svg>
            <span class="pl-2 text-base lg:text-lg font-medium">12% vs one month</span>
          </div>
        </div>
        <div class="flex">
          <button-component isPurple class="mr-2">Quick invest</button-component>
          <button-component>Show Report</button-component>
        </div>
      </div>
    </card-component>
    <card-component class="grow flex flex-col pb-2 order-last  sm:order-none col-span-2 sm:col-auto">
      <div class="flex justify-between items-center mb-3">
        <h2 class="text-black font-medium text-lg lg:text-xl">Summary</h2>
        <svg class="h-6 w-6 cursor-pointer text-gray-text" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
          stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" />
          <circle cx="5" cy="12" r="1" />
          <circle cx="12" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
        </svg>
      </div>
      <div class="h-[80%]">
        <apexchart height="100%" width="100%" type="area" :options="summaryOptions" :series="summarySeries">
        </apexchart>
      </div>
    </card-component>
    <card-component class="col-span-2 flex-grow flex flex-col">
      <div class="text-sm font-medium text-center text-gray-text border-b border-gray-200">
        <ul class="flex flex-wrap gap-3">
          <li class="">
            <a href="#" class="tableTab" @click="selectedId = 1">Summary</a>
          </li>
          <li class="">
            <a href="#" class="tableTab" @click="selectedId = 2">Table</a>
          </li>
          <li class="">
            <a href="#" class="tableTab" @click="selectedId = 3">Charts</a>
          </li>
          <li class="">
            <a href="#" class="tableTab" @click="selectedId = 4">Reporting</a>
          </li>
          <li>
            <a href="#" class="tableTab" @click="selectedId = 5">Analysis</a>
            <CryptoIcon name="btc" :size="35" />
          </li>
        </ul>
      </div>
      <div v-if="selectedId == 1"
        class="mt-4 lg:mt-8 overflow-y-auto max-h-[300px] md:max-h-[145px] lg:max-h-[200px] xl:max-h-[280px]">
        <div v-for="coin in coinMarketData" :key="coin.name"
          class="flex justify-between items-center border border-gray-200 rounded-lg bg-white p-3 mb-2">
          <div class="flex-col justify-center md:w-[20%]">
            <div class="text-sm text-gray-text">{{ coin.symbol }}</div>
            <div class="text-sm text-black hidden md:block">{{ coin.name }}</div>
          </div>
          <div class="flex-col justify-center md:w-[20%]">
            <div class="text-sm text-gray-text">Price</div>
            <div class="text-sm text-black">${{ + (coin.price).toFixed(2) }}</div>
          </div>
          <div class="flex-col justify-center md:w-[20%]">
            <span class="text-sm text-gray-text">Change</span>
            <span class="flex items-center text-sm" :class="coin.change > 0 ? 'text-green' : 'text-red'">
              <span class="mr-1">{{ + (coin.change).toFixed(2) }}%</span>
              <svg v-if="coin.change > 0" class="h-4 w-4 hidden md:block" width="24" height="24" viewBox="0 0 24 24"
                stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="12" cy="12" r="9" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <polyline points="15 15 15 9 9 9" />
              </svg>
              <svg v-else class="h-4 w-4 hidden md:block" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="12" cy="12" r="9" />
                <line x1="15" y1="15" x2="9" y2="15" />
                <polyline points="15 9 15 15 9 9" />
              </svg>
            </span>
          </div>
          <div class="flex-col justify-center hidden md:block md:w-[20%]">
            <img v-if="coin.change > 0" src="../.././public/graphGreen.webp" />
            <img v-if="coin.change < 0" src="../.././public/graphRed.webp" />
          </div>
          <div class="flex justify-end items-center md:w-[20%]">
            <button-component>Sell</button-component>
            <button-component isPurple class="ml-0.5 md:ml-2">Buy</button-component>
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
import VueApexCharts from 'vue3-apexcharts';
import useCoinMarketApi from '../composables/useCoinMarketApi'

export default defineComponent({
  name: 'OverviewPage',
  components: {
    CardComponent,
    ButtonComponent,
    apexchart: VueApexCharts,
  },
  setup() {
    const selectedId = ref(1)
    const { coinMarketData } = useCoinMarketApi()

    const summaryOptions = {
      chart: {
        type: 'line',
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: false,
        },
        height: '100%',
        width: '100%'
      },
      legend: {
        labels: {
          colors: ['#9896A1'],
        },
        horizontalAlign: 'left',
        fontSize: 12,
        markers: {
          width: 8,
          height: 8,
        }
      },
      plotOptions: {
        area: {
          size: 150,
        }
      },
      colors: ['#9896A1', '#7445FB',],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5
        },
      },
      xaxis: {
        labels: {
          show: false,
        }
      },
      yaxis: {
        labels: {
          style: {
            fontSize: 10,
            colors: ['#9896A1']
          }
        }
      }
    }
    const summarySeries = ref([
      {
        name: 'This month',
        data: [30, 40, 35, 50, 50, 30, 40, 100, 120],
      },
      {
        name: 'Lats month',
        data: [30, 40, 20, 50, 70, 10, 40, 100, 120],
      },
    ])

    return {
      selectedId,
      summaryOptions,
      summarySeries,
      coinMarketData
    }
  }
})
</script>

<style scoped>

</style>