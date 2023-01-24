<template>
  <div class="flex justify-center items-center h-screen w-screen bg-black">
    <div class="relative flex h-full w-full max-w-[1440px] lg:max-h-[900px] md:overflow-hidden">
      <sidebar-component />
      <div class="flex flex-col grow h-full bg-white lg:rounded-r-xl px-4 lg:px-16">
        <header-component />
        <div class="flex justify-center bg-white border-gray-200 pt-8 rounded-tr-xl">
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

<script lang="ts">
import { defineComponent } from "vue";
import SidebarComponent from "../components/SidebarComponent.vue";
import HeaderComponent from "../components/HeaderComponent.vue";

export default defineComponent({
  name: 'MainLayout',
  components: { SidebarComponent, HeaderComponent, },

  setup() {

    return {

    }
  }
});
</script>

<style>

</style>