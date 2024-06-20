<template>
    <div class="newModal">
        <div class="modal-bg" @click="$emit('close')"></div>
        <div class="modal">
            <h3>{{ newsContent.title }}</h3>
            <img :src="newsContent.image == '' ? '/images/gallery/1dv.jpg': newsContent.image" alt="">
            <div class="content" v-html="newsContent.fullContent"></div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    newsContent:{
        default:{
            image:'',
            fullContent:"",
            title:"",
        },
        type:Object
    }
})
</script>
<style lang="scss" scoped>
    .newModal{
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 10;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        .modal-bg{
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: hsla(0,0%,10%,0.5);
            backdrop-filter: blur(3px);
            cursor: pointer;
        }
        .modal{
            position: relative;
            z-index: 11;
            width: var(--contentWidthMd);
            padding: var(--spacingLg);
            background-color: var(--secondaryBg);
            display: flex;
            flex-direction: column;
            align-items:center;
            gap: 1rem;
            max-height: 80%;
            overflow-y: scroll;
            border-radius: var(--radiusMd);
            img{
                border-radius: var(--radiusMd);
                max-width: 100%;
                max-height: 400px;
                object-fit: contain;
            }
            .content{
                width: 66%;
            }
        }
    }
</style>