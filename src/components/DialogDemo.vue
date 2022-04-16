<template>
    <div>
        <h1>示例1</h1>
        <Dialog v-model:visible="x" 
        :closeOnClickOverlay="false"
        :ok="f1" :cancel="f2">
            <template v-slot:title>
                <h1>标题</h1>
            </template>
            <template v-slot:content>
                <p>第一行字</p>
                <p>第二行字</p>
            </template>
        </Dialog>
        <Button @click="toggle">toggle</Button>
        <h1>示例2</h1>
         <Button @click="showDialog">show</Button>
    </div>
</template>

<script setup lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { ref } from '@vue/reactivity'
import {openDialog} from '../lib/openDialog'
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
const showDialog=()=>{
    openDialog({
        title:'标题',
        content:'你好',
        f1,f2
    })
}

</script>