<template>

  <router-view></router-view>

</template>


<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
import { ref } from "@vue/reactivity"
import { provide } from "@vue/runtime-core"

// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
  const width=document.documentElement.clientWidth
  const menuVisible=ref(width>700?true:false)
  provide('menuVisible',menuVisible)
 

</script>




