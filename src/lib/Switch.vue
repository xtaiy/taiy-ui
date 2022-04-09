<template >
    <button><span></span></button>
</template>

<style lang="scss" scoped>
    $h:22px;
    $h2:$h - 4px;
    button{
        height: $h;
        width: $h * 2;
        border: none;
        background: blue;
        border-radius: $h/2;
        position: relative;
    }
    span{
        position: absolute;
        background: white;
        height: $h2;
        width: $h2;
        top: 2px;
        left: 2px;
        border-radius: $h2 / 2;
    }
</style>