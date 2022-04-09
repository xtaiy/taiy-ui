<template >
    <button @click="toggle"  :class="{checked:value}">
        <span></span>
    </button>
    
</template>

<script setup lang="ts">
import { ref, toRefs } from "@vue/reactivity";


const props = defineProps({
    value: Boolean
})
const em=defineEmits(['input'])
let {value}=toRefs(props)
const toggle=()=>{
    em('input',!value.value)
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
        transition: left 250ms;
    }
    button.checked{
        background: blue;
        >span{
            left:24px;
        }
    }
    
    

</style>