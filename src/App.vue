<template>
  <RouterView />
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import useCoinMarketApi from './composables/useCoinMarketApi';

export default defineComponent({
  name: 'App',

  setup() {
    const { getcoinMarketData } = useCoinMarketApi()

    onMounted(getcoinMarketData)
    return {}
  }
});

</script>

<style>

</style>
