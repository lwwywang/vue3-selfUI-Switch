<template>
  <router-view />
</template>

<script lang="ts">
import Liwen from './components/Liwen.vue'
import { provide, ref } from 'vue'

export default {
  name: 'App',
  setup() {
    const asideVisible = ref(false)
    provide('xxx', asideVisible)
  },
}
</script>
