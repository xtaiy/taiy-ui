<template>
    <div class="taiy-tabs">
        <div class="taiy-tabs-nav" ref="container">
            <div class="taiy-tabs-nav-item" :class="{selected:t===selected}"
            v-for="(t,index) in titles" :key="index"
            @click="select(t)" :ref="el=>{if(t===selected) selectedItem=el}">{{t}}</div>

            <div class="taiy-tabs-nav-indicator" ref="indicator"></div>
        </div>
        <div class="taiy-tabs-content">
            <component class="taiy-tabs-content-item"  :is="current" :key="selected"></component>
        </div>

    </div>
</template>

<script lang="ts">
import { computed, onMounted, ref, watchEffect } from '@vue/runtime-core'
import Tab from './Tab.vue'

    export default{
        props:{
            selected:{
                type:String
            }
        },
        setup(props:any ,context:any ){
            
            const selectedItem=ref<HTMLDivElement>(null)
            const indicator=ref<HTMLDivElement>(null)
            const container=ref<HTMLDivElement>(null)
            
            onMounted(()=>{
                watchEffect(()=>{
                    const {width}= selectedItem.value.getBoundingClientRect()
                indicator.value.style.width=width+'px'
                const {left:left1}=container.value.getBoundingClientRect()
                const {left:left2}=selectedItem.value.getBoundingClientRect()
                const left =left2-left1
                indicator.value.style.left=left+'px'
                })
            })
            
            
            const defaults=context.slots.default()
            defaults.forEach((tag: { type: any })=>{
                if(tag.type!==Tab){
                    throw new Error('Tabs 子标签必须是 Tab')
                }
            })

            const titles=defaults.map((tag: { props: { title: any } })=>{
                return tag.props.title
            })

            const current=computed(()=>{
                return defaults.filter((tag: { props: { title: any } })=>{
                    return tag.props.title===props.selected
                })[0]
            })

            const select=(title:string)=>{
                context.emit('update:selected',title)
            }
            return {selectedItem, indicator,container, defaults,titles,current,select}
        }
        
    }
</script>

<style lang="scss">
    $blue: #40a9ff;
    $color: #333;
    $border-color: #d9d9d9;
    .taiy-tabs{
        &-nav{
            display: flex;
            color:$color;
            border-bottom: 1px solid $border-color;
            position: relative;

            &-item{
                padding: 8px 0;
                margin: 0 16px;
                cursor: pointer;

                &:first-child{
                    margin-left: 0;
                }

                &.selected{
                    color:$blue
                }
            }
            &-indicator{
                    position: absolute;
                    height: 3px;
                    background: $blue;
                    left: 0;
                    bottom: -1px;
                    width: 100px;
                    transition:all 250ms;
                }
        }
        &-content{
            padding: 8px 0;
        }
        
    }
</style>