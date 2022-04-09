<template>
    <div>
        <Switch v-model:value='bool'  />
    </div>
</template>

<script setup lang="ts">
import { ref } from '@vue/reactivity'
import Switch from '../lib/Switch.vue'
components:{
    Switch
}
let bool = ref(false)

</script>