<template>
    <div class="subPageHero">
        <img :style="{objectPosition:top}" :src="image" alt="">
        <h1>{{ title }}</h1>
    </div>
  </template>
  <script setup>
  const props = defineProps({
    image:String,
    top:String,
    title:String
  })
  </script>
  <style lang="scss" scoped>
    .subPageHero{
        width: 100vw;
        height: 400px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: var(--spacingXl);
        h1{
          margin-top: 2rem;
          position: relative;
          z-index: 5;
          text-align: center;
          @media(max-width:700px){
            margin-top: 5rem;
          }
        }
        &::after{
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: hsla(0,0%,0%,0.3);
          z-index: 3;
          top: 0;
          left: 0;
        }
        img{
          position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
            background-color: var(--tertiaryBg);
        }
    }
  </style>