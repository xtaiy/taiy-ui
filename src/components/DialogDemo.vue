<template>
    <div>
        <h1>示例1</h1>
        <Dialog v-model:visible="x" 
        :closeOnClickOverlay="false"
        :ok="f1" :cancel="f2"></Dialog>
        <Button @click="toggle">toggle</Button>
    </div>
</template>

<script setup lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { ref } from '@vue/reactivity'
components:{
    Dialog,
    Button
}
const x=ref(false)
let toggle=()=>{
    x.value=!x.value
}
const f1=()=>{
    return false
}
const f2=()=>{
    return 2
}

</script>