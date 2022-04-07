<template>
    <div>
        <Topnav />
        <div class="content">
            <aside>
                <h2>组件列表</h2>
                <ol>
                    <li><router-link to="/doc/switch">switch组件</router-link></li>
                    <li><router-link to="/doc/button">button组件</router-link></li>
                    <li><router-link to="/doc/dialog">dialog组件</router-link></li>
                    <li><router-link to="/doc/tabs">tabs组件</router-link></li>
                </ol>
            </aside>
            <main>主内容</main>
        </div>
    </div>
</template>

<script setup lang="ts">
import Topnav from '../components/Topnav.vue'
components:{
    Topnav
}
</script>