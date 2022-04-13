<template>
        <button class="taiy-button" 
        :class="classes" >
        <!--$attrs有父组件传递来的属性，默认会继承到根节点上，使用v-bind改定到现在的节点上-->
            <slot />
        </button>
</template>

<script lang="ts">
import { computed } from '@vue/runtime-core'
    export default{
        //inheritAttrs:false,
        /*取消默认的继承属性，这样外面的属性不会
        自动的放在组件的最外层的标签上 */
        props:{
            theme:{
                type:String,
                default:'button'
            },
            size:{
                type:String,
                default:"normal"
            },
            level:{
                type:String,
                default:"normal"
            }
        },
        setup(props: { theme: any; size: any ;level:any}){
            const {theme,size,level}=props
            const classes= computed(()=>{
                return {
                    [`taiy-theme-${theme}`]:theme,
                    [`taiy-size-${size}`]:size,
                    [`taiy-level-${level}`]:level,
                }
            })
            return {classes}
        }
    }
</script>

<style lang="scss">
    $h:32px;
    $borfer-color:#d9d9d9;
    $color:#333;
    $blue:#40a9ff;
    $radius:4px;
    $red: red;
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
        &.taiy-theme-link{
            border-color: transparent;
            box-shadow: none;
            color: $blue;
            &:hover,&:focus{
                color:lighten($blue, 10%)
            }
        }
        &.taiy-theme-text{
            border-color: transparent;
            box-shadow: none;
            color: inherit;
            &:hover,&:focus{
                background: darken(white,5%);
            }
        }
        &.taiy-size-big{
            font-size: 24px;
            height: 48px;
            padding: 0 16px;
        }
        &.taiy-size-small{
            font-size: 12px;
            height: 20px;
            padding: 0 4px;
        }
        &.taiy-theme-button{
            &.taiy-level-main {
                background: $blue;
                color: white;
                border-color: $blue;
                &:hover,
                &:focus {
                    background: darken($blue, 10%);
                    border-color: darken($blue, 10%);
                }
            }
            &.taiy-level-danger {
                background: $red;
                border-color: $red;
                color: white;
                &:hover,
                &:focus {
                    background: darken($red, 10%);
                    border-color: darken($red, 10%);
                }
            }    
        }
        &.taiy-theme-link {
            &.taiy-level-danger {
                color: $red;
                &:hover,
                &:focus {
                    color: darken($red, 10%);
                }
            }
        }
        &.taiy-theme-text {
            &.taiy-level-main {
                color: $blue;
                &:hover,
                &:focus {
                    color: darken($blue, 10%);
                }
            }
            &.taiy-level-danger {
                color: $red;
                &:hover,
                &:focus {
                    color: darken($red, 10%);
                }
            }
        }
    }
</style>