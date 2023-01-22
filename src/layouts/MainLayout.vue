<template>
  <div class="flex justify-center items-center h-screen w-screen">
    <div class="flex h-full w-full max-w-[1440px] max-h-[900px]">
      <sidebar-component />
      <div class="grow bg-white rounded-r-xl px-2 lg:px-16">
        <header-component />
        <div class="flex items-center justify-center bg-white border-gray-200 pt-8 rounded-tr-xl grow h-fit">
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