<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: 'MainLayout',

  setup() {
    const open = ref(false)
    return {
      open
    }
  }
});
</script>

<template>
  <div class="flex justify-center items-center h-screen w-screen">
    <div class="flex h-full w-full max-w-[1440px] max-h-[900px]">
      <aside class="w-64 h-full" aria-label="Sidebar">
        <div class="flex flex-col h-full px-3 py-4 overflow-y-auto rounded-l-xl bg-gray-bg">
          <div class="flex items-center pt-6 pb-16">
            <img class="pl-2" src="../../../public/LogoDots.svg" />
            <span class="pl-2 text-dark-text text-2xl font-bold">Payte</span>
          </div>
          <nav>
            <ul class="space-y-2">
              <li>
                <a href="#" class="group sidebar-link">
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
                <a href="#" class="group sidebar-link">
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
                <a href="#" class="group sidebar-link">
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
                <a href="#" class="group sidebar-link">
                  <svg class="sidebar-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <span class="sidebar-text">Bundles</span>
                </a>
              </li>
              <li>
                <a href="#" class="group sidebar-link">
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
                <a href="#" class="group sidebar-link">
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
                <img class="pr-2" src="../../../public/Marc.png" />
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
      <div class="grow bg-white rounded-r-xl">
        <header class="flex items-center border-gray-200 px-2 lg:px-16 pt-12 rounded-tr-xl grow max-h-32">
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
              <div
                class="absolute inline-flex items-center justify-center w-3 h-3 bg-red rounded-full -top-0.5 -right-0.5">
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
        <div class="flex items-center bg-white border-gray-200 px-2 lg:px-16 pt-6 rounded-tr-xl grow">
          <router-view v-slot="{ Component }">
            <suspense>
              <component :is="Component" />
            </suspense>
          </router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>