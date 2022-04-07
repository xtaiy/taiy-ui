<template>
    <div>
        <Topnav />
        <div class="banner">
            <h1>taiy的ui</h1>
            <h2>一个不错的额UI框架</h2>
            <p class="action">
                <a href="">Github</a>
                <a href="">开始</a>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import Topnav from '../components/Topnav.vue'
components:{
    Topnav
}
</script>

<style lang="scss" scoped>
    .banner{
        background: lightgreen;
        padding: 100px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        >.action{
            padding: 8px 0;
            a{
                background: #fff;
                margin: 0 8px;
                display: inline-block;
                $h:28px;
                height: $h;
                line-height: $h;
                border-radius: $h/2;
                padding: 0 8px;
            }
            

        }
    }
</style>