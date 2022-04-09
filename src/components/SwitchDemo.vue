<template>
    <div>
        <Switch :value='y' :message="1" @input="y=$event" />
    </div>
</template>

<script setup lang="ts">
import { ref } from '@vue/reactivity'
import Switch from '../lib/Switch.vue'
components:{
    Switch
}
let y = ref(false)

</script>