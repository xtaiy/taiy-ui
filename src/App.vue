<template>

  <router-view></router-view>

</template>


<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
import { ref } from "@vue/reactivity"
import { provide } from "@vue/runtime-core"
import { router } from "./router"

// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
  const width=document.documentElement.clientWidth
  const menuVisible=ref(width>700?true:false)
  provide('menuVisible',menuVisible)
  router.afterEach(()=>{//每次路由切换都会执行
    if(width<=700){
      menuVisible.value=false
    }
  })

</script>




