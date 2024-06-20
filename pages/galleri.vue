<template>
    <div class="galleryPage">
      <SubPageHeroCom image="/images/campus2.jpg" title="Galleri"></SubPageHeroCom>
      <div class="gallery">
        <img v-for="image in images" @click="currentImage = image" :src="image" alt="">
      </div>
      <Teleport to="body">
        <LightBoxCom @closeBox="close" v-if="currentImage != ''" :image="currentImage"></LightBoxCom>
      </Teleport>
    </div>
  </template>
  <script setup>
  const currentImage = ref("")
  const images = ref([
  "/images/gallery/1dv.jpg",
  "/images/gallery/2dv.jpg",
  "/images/gallery/3dv.jpg",
  "/images/gallery/10dv.jpg",
  "/images/gallery/10jph.jpg",
  "/images/gallery/10nhh.jpg",
  "/images/gallery/11dv.jpg",
  "/images/gallery/11jph.jpg",
  "/images/gallery/11nhh.jpg",
  "/images/gallery/12dv.jpg",
  "/images/gallery/12jph.jpg",
  "/images/gallery/12nhh.jpg",
  "/images/gallery/13nhh.jpg",
  "/images/gallery/14nhh.jpg",
  "/images/gallery/hotel20dv.jpg",
  "/images/gallery/hotel21dv.jpg",
  "/images/gallery/hotel22dv.jpg",
  "/images/gallery/hotel23dv.jpg",
  "/images/gallery/hotel24dv.jpg",
  "/images/gallery/hotel25dv.jpg",
  "/images/gallery/jph1.jpg",
  "/images/gallery/jph2.jpg",
  "/images/gallery/jph3.jpg",
  "/images/gallery/jph4.jpg",
  "/images/gallery/nhh1.jpg",
  "/images/gallery/nhh1plan.jpg",
  "/images/gallery/nhh2.jpg",
  "/images/gallery/nhh3.jpg",
  ])
  function close(){
    currentImage.value = ""
  }
  </script>
  <style lang="scss" scoped>
    .gallery{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 1rem;
      width: var(--contentWidthLg);
      margin: auto;
      img{
        width: 100%;
        border-radius: var(--radiusMd);
        transition: 250ms;
        height: 200px;
        object-fit: cover;
        cursor: pointer;
        &:hover{
          transform: translateY(-10px);
        }
      }
      @media(max-width:1600px){
        grid-template-columns: 1fr 1fr;
      }
      @media(max-width:700px){
        grid-template-columns: 1fr;
      }
    }
  </style>