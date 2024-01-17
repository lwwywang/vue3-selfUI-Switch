<template>
  <router-view />
</template>

<script lang="ts">
import Liwen from './components/Liwen.vue'
import { provide, ref } from 'vue'

export default {
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth;
    const asideVisible = ref(width <= 500 ? false : true);
    provide('asideVisible', asideVisible);
  },
}
</script>
