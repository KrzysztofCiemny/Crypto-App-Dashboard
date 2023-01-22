<template>
  <aside class="w-64 h-full" aria-label="Sidebar">
    <div class="flex flex-col h-full px-3 py-4 overflow-y-auto rounded-l-xl bg-gray-bg">
      <div class="flex items-center pt-6 pb-16">
        <img class="pl-2" src="../../../LogoDots.svg" />
        <span class="pl-2 text-dark-text text-2xl font-bold">Payte</span>
      </div>
      <nav>
        <ul class="space-y-[0.75rem]">
          <li>
            <a href="#" class="group sidebar-link cursor-pointer" @click="$router.push('/')">
              <svg class="sidebar-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="5 12 3 12 12 3 21 12 19 12" />
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
              </svg>
              <span class="sidebar-text">Overview</span>
            </a>
          </li>
          <li>
            <a href="#" class="group sidebar-link cursor-pointer" @click="$router.push('/BuySell')">
              <svg class="sidebar-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="3" y1="21" x2="21" y2="21" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <polyline points="5 6 12 3 19 6" />
                <line x1="4" y1="10" x2="4" y2="21" />
                <line x1="20" y1="10" x2="20" y2="21" />
                <line x1="8" y1="14" x2="8" y2="17" />
                <line x1="12" y1="14" x2="12" y2="17" />
                <line x1="16" y1="14" x2="16" y2="17" />
              </svg>
              <span class="sidebar-text">Buy / Sell</span>
            </a>
          </li>
          <li>
            <a href="#" class="group sidebar-link cursor-pointer" @click="$router.push('/Wallets')">
              <svg class="sidebar-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <path
                  d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
              </svg>
              <span class="sidebar-text">Wallets</span>
            </a>
          </li>
          <li>
            <a href="#" class="group sidebar-link cursor-pointer" @click="$router.push('/Bundles')">
              <svg class="sidebar-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <span class="sidebar-text">Bundles</span>
            </a>
          </li>
          <li>
            <a href="#" class="group sidebar-link cursor-pointer" @click="$router.push('/Reporting')">
              <svg class="sidebar-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="5" y1="5" x2="5" y2="21" />
                <line x1="19" y1="5" x2="19" y2="14" />
                <path d="M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0" />
                <path d="M5 14a5 5 0 0 1 7 0a5 5 0 0 0 7 0" />
              </svg>
              <span class="sidebar-text">Reporting</span>
            </a>
          </li>
          <li>
            <a href="#" class="group sidebar-link cursor-pointer" @click="$router.push('/Community')">
              <svg class="sidebar-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="12" y1="12" x2="12" y2="12.01" />
                <path d="M12 2a4 10 0 0 0 -4 10a4 10 0 0 0 4 10a4 10 0 0 0 4 -10a4 10 0 0 0 -4 -10"
                  transform="rotate(45 12 12)" />
                <path d="M12 2a4 10 0 0 0 -4 10a4 10 0 0 0 4 10a4 10 0 0 0 4 -10a4 10 0 0 0 -4 -10"
                  transform="rotate(-45 12 12)" />
              </svg>
              <span class="sidebar-text">Community</span>
            </a>
          </li>
        </ul>
      </nav>
      <div class="flex flex-col grow justify-between pt-4 mt-4 space-y-2 border-t border-gray-200">
        <div class="pt-2">
          <div
            class="flex items-center pl-2 justify-between text-base font-normal text-gray-text transition duration-75 rounded-lg">
            <span class="text-sm font-semibold">Favorites</span>
            <svg class="h-6 w-6 cursor-pointer pr-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx="5" cy="12" r="1" />
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
            </svg>
          </div>
        </div>
        <div class="flex justify-between items-center pl-2 py-2 text-gray-text">
          <div class="flex">
            <img class="pr-2" src="../../../Marc.png" />
            <div>
              <span class="flex text-black text-sm font-semibold">Marc Webber</span>
              <span class="text-sm">marc@riot.com</span>
            </div>
          </div>
          <svg class="h-6 w-6 cursor-pointer pr-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
            stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <circle cx="5" cy="12" r="1" />
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
          </svg>
        </div>
      </div>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SidebarComponent',
  setup() {

    return {}
  }
})
</script>

<style scoped>

</style>