<template>
    <div class="taiy-tabs">
        <div class="taiy-tabs-nav">
            <div class="taiy-tabs-nav-item" :class="{selected:t===selected}"
            v-for="(t,index) in titles" :key="index"
            @click="select(t)">{{t}}</div>
        </div>
        <div class="taiy-tabs-content">
            <component class="taiy-tabs-content-item"  :is="current" :key="selected"></component>
        </div>

    </div>
</template>

<script lang="ts">
import { computed } from '@vue/runtime-core'
import Tab from './Tab.vue'
    export default{
        props:{
            selected:{
                type:String
            }
        },
        setup(props: any,context: { slots: { default: () => any }; emit: (arg0: string, arg1: string) => void } ){
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
            return {defaults,titles,current,select}
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
        }
        &-content{
            padding: 8px 0;
        }
        
    }
</style>