<template>
    <div>Button 实例</div>
    <h1>示例1</h1>
    <div>
        <Button>按钮</Button>
        <Button theme="button">按钮</Button>
        <Button theme="link">链接</Button>
        <Button theme="text">文本</Button>
    </div>
    <hr>
    <h1>示例2</h1>
    <div>
        <Button size="big">大按钮</Button>
        <Button >普通按钮</Button>
        <Button size="small">小按钮</Button>
    </div>
    <div>
        <Button theme="link" size="big">大link</Button>
        <Button theme="link">普通link</Button>
        <Button theme="link" size="small">小link</Button>
    </div>
    <div>
        <Button theme="text" size="big">大text</Button>
        <Button theme="text">普通text</Button>
        <Button theme="text" size="small">小text</Button>
    </div>
    <hr>
    <h1>示例3</h1>
    <div>
        <Button level="main" >main</Button>
        <Button >normal</Button>
        <Button level="danger">danger</Button>
    </div>
    <div>
        <Button theme="link" level="main">大link</Button>
        <Button theme="link">普通link</Button>
        <Button theme="link" level="danger">小link</Button>
    </div>
    <div>
        <Button theme="text" level="main">大text</Button>
        <Button theme="text">普通text</Button>
        <Button theme="text" level="danger">小text</Button>
    </div>
    <hr>
    <h1>示例4</h1>
    <div>
    <Button disabled>禁用按钮</Button>
    <Button theme="link" disabled>禁用链接按钮</Button>
    <Button theme="text" disabled>禁用按钮</Button>
  </div>
  <hr>
  <h1>示例5</h1>
  <div>
    <Button loading>加载中</Button>
    <Button >加载完毕</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'

export default{
    components:{
        Button
    },
    setup(){
        const onClick=()=>{
            
        }
        return {onClick}
    }
}
</script>