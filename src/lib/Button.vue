<template>
        <button class="taiy-button" 
        :class="`taiy-theme-${theme}`" >
        <!--$attrs有父组件传递来的属性，默认会继承到根节点上，使用v-bind改定到现在的节点上-->
            <slot />
        </button>
</template>

<script lang="ts">
    export default{
        //inheritAttrs:false,
        /*取消默认的继承属性，这样外面的属性不会
        自动的放在组件的最外层的标签上 */
        props:{
            theme:{
                type:String,
                default:'button'
            }
        },
        setup(props,context){
            
        }
    }
</script>

<style lang="scss">
    $h:32px;
    $borfer-color:#d9d9d9;
    $color:#333;
    $blue:#40a9ff;
    $radius:4px;
    .taiy-button{
        box-sizing: border-box;
        height: $h;
        padding: 0 12px;
        cursor: pointer;
        display: inline-block;
        justify-content: center;
        align-items: center;
        white-space: nowrap;
        background: white;
        color: $color;
        border: 1px solid $borfer-color;
        box-shadow: 0 1px 0 fade-out(black, 0.95);
        & + &{
            margin-left: 8px;
        }
        &:hover,
        &:focus{
            color: $blue;
            border-color: $blue;
        }
        &:focus{
            outline: none;
        }
        &::-moz-focus-inner{
            border: 0;
        }

    }
</style>