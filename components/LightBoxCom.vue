<template>
    <div class="LightBox">
        <div class="LightBox-Bg" @click="$emit('closeBox')"></div>
        <img :src="image" alt="">
    </div>
  </template>
  <script setup>
  const props = defineProps({
    image:String
  })
  </script>
  <style lang="scss" scoped>
    .LightBox{
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
        &-Bg{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: hsla(0,0%,0%,0.2);
            backdrop-filter: blur(3px);
            z-index: 6;
            cursor: pointer;
        }
        img{
            position: relative;
            width: auto;
            height: 100%;
            max-height: 90%;
            height: auto;
            object-fit: contain;
            z-index: 11;
        }
        @media(max-width:1000px){
            img{
                width: 90%;
            }
        }
    }
</style>