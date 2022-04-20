<template>
    <template v-if="visible">
        <teleport to='body' >
            <div class="taiy-dialog-overlay" 
                @click="onClickOverlay">
            </div>
            <div class="taiy-dialog-wrapper">
                <div class="taiy-dialog">
                    <header>
                        <slot name="title"></slot>
                        <span @click="close" class="taiy-dialog-close"></span>
                    </header>
                    <main>
                        <slot name="content"></slot>
                    </main>
                    <footer>
                        <Button @click="cancel">取消</Button>
                        <Button  @click="ok"> 确定</Button>
                    </footer>
                </div>
            </div>
        </teleport>
    </template>
</template>

<script setup lang="ts">
import { toRefs } from '@vue/reactivity'
import Button from './Button.vue'
components:{
    Button
}
const props=defineProps({
    visible:{
        type:Boolean,
        default:false
    },
    closeOnClickOverlay:{
        type:Boolean,
        default:true
    },
    ok:{
        type:Function
    },
    cancel:{
        type:Function
    }
})
const {visible,closeOnClickOverlay}=toRefs(props)
const em=defineEmits(["update:visible"])
const close=()=>{
    em("update:visible",!visible)
}

const onClickOverlay=()=>{
    if(closeOnClickOverlay.value){
        close()
    }
}

const cancel=()=>{
    if(props.cancel?.()!==false){
        close()
    }
}
const ok=()=>{
    if(props.ok&&props.ok()!==false){
        close()
    }
}

</script>

<style lang="scss">
$radius:4px;
$border-color:#d9d9d9;
.taiy-dialog{
    background: white;
    border-radius: $radius;
    box-shadow: 0 0 3px fade_out(black,0.5);
    min-width: 15em;
    max-height: 90%;

    &-overlay{
        background: fade_out(black,0.5);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
    }
    &-wrapper{
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        z-index: 11;
    }
    >header{
        padding: 12px 16px;
        border-bottom: 1px solid $border-color;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 20px;
    }
    >main{
        padding: 12px 16px;
    }
    >footer{
        border-top:1px solid $border-color;
        padding: 12px 16px;
        text-align: right;
    }
    &-close{
        position: relative;
        display: inline-block;
        width: 16px;
        height: 16px;
        cursor: pointer;

        &::before,&::after{
            content: ' ';
            position: absolute;
            height: 1px;
            background: black;
            width: 100%;
            top: 50%;
            left: 50%;
        }
        &::before {
        transform: translate(-50%, -50%) rotate(-45deg);
        }
        &::after {
        transform: translate(-50%, -50%) rotate(45deg);
        }
    }
}
</style>