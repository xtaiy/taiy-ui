<template>
    <div>
        <div class="layout">
            <Topnav class="nav" />
            <div class="content">
                <aside v-if="menuVisible">
                    <h2>组件列表</h2>
                    <ol>
                        <li><router-link to="/doc/switch">switch组件</router-link></li>
                        <li><router-link to="/doc/button">button组件</router-link></li>
                        <li><router-link to="/doc/dialog">dialog组件</router-link></li>
                        <li><router-link to="/doc/tabs">tabs组件</router-link></li>
                    </ol>
                </aside>
                <main>
                    <router-view></router-view>
                </main>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Topnav from '../components/Topnav.vue'
import { inject, Ref } from "@vue/runtime-core";

components:{
    Topnav
}

const menuVisible = inject<Ref<boolean>>('menuVisible')
</script>

<style lang="scss" scoped>
.layout{
    display: flex;
    flex-direction: column;
    height: 100vh;
    >.nav{
        flex-shrink: 0;
    }
    >.content{
        flex-grow: 1;
        padding-top: 60px;
        padding-left: 156px;
        @media(max-width: 700px){
            padding-left: 0;
        }
    }
}
.content{
    display: flex;
    > aside{
        flex-shrink: 0;
    }
    > main{
        flex-grow: 1;
        padding: 16px;
        background: white;
    }
}
aside{
    background: lightblue;
    width: 150px;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
    height: 100%;
    >h2{
        margin-bottom: 4px;
    }
    >ol{
        >li{
            padding: 4px 0;
        }
    } 
}
main{
    overflow: auto;
}
</style>