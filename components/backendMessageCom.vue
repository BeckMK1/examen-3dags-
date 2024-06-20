<template>
	<div class="message">{{ message }}</div>
</template>
<script setup>
const props = defineProps({
    message:String
})
</script>
<style lang="scss" scoped>
    .message{
        position: absolute;
        padding: 1rem;
        background-color: hsla(0,0%,100%,0.5);
        backdrop-filter: blur(3px);
        left: 50%;
        bottom: 3rem;
        box-sizing: border-box;
        z-index: 5;
        border-radius: var(--radiusMd);
        transform: translateX(-50%);
    }
</style>