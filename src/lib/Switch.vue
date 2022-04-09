<template >
    <button :class="{checked: checked}" @click="toggle"><span></span></button>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";

let checked = ref(false)
const toggle=()=>{
    checked.value=!checked.value
}

</script>

<style lang="scss" scoped>
    $h:22px;
    $h2:$h - 4px;
    button{
        height: $h;
        width: $h * 2;
        border: none;
        background: grey;
        border-radius: $h / 2;
        position: relative;
    }
    span{
        position: absolute;
        background: white;
        height: $h2;
        width: $h2;
        top: 2px;
        left: 2px;
        border-radius: $h2/2;
    }
    button.checked{
        background: blue;
        >span{
            left:24px;
        }
    }
    
    

</style>