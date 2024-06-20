<template>
	<div class="slider-container"> 
			<div class="slider">
				<div class="prev sliderBtn" @click="isAutoPlay = false, prev()"><img src="/images/icons/chevron-right-solid.svg" alt=""></div>
				<div class="slider-images">
						<img v-for="(image, index) in srtingImages" :key="index" :class="index == currentSlide ? 'slideActive':''" :src="image"  alt="">
				</div>
				<div class="next sliderBtn" @click="isAutoPlay = false, next()"><img src="/images/icons/chevron-right-solid.svg" alt=""></div>
		</div>
	</div>
  </template>
  <script setup>
    const props = defineProps({
        images:{
            default:[],
            type:Array
        }
    })
    const currentSlide = ref(0)
    const isAutoPlay = ref(true)
    const srtingImages = ref([])
    function convertImgToString(){
        props.images.forEach(image => {
            srtingImages.value.push(image.toString())
        });
    }
    convertImgToString()
    function next(){
	if(currentSlide.value == props.images.length - 1){
		currentSlide.value = 0
		return
	}
	currentSlide.value++
    }
    function prev(){
	if(currentSlide.value == 0){
		currentSlide.value = props.images.length - 1
		return
	}
	currentSlide.value--
    }
    function autoPlay(){
	const autoPlay = setInterval(() => {
		if(isAutoPlay.value == false){
			clearInterval(autoPlay)
			return
		}
		next()	
	}, 5000);
    }
    onMounted(()=>{
        autoPlay()
    })
    watch(isAutoPlay, async ()=>{
        if(isAutoPlay.value == false){
            setTimeout(()=>{
                isAutoPlay.value = true
            }, 10000)
            return
        }
        autoPlay()
    })
  </script>
  <style lang="scss" scoped>
    .slider-container{
	height: 100%;
	width: 100%;
	position: relative;
	overflow: hidden;
	margin-bottom: var(--sectionSpacing);
    }
    .slider{
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        width: 100%;
        height: 100%;
        top:0;
        &-images{
            position: absolute;
            width: 100%;
            height: 100%;
            &::after{
                content: "";
                background-color: hsla(0,0%,0%,0.3);
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
            }
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: 500ms;
                opacity: 0;
                position: absolute;
                top: 0;
                &.slideActive{
                    opacity: 1;
                }
            }
        }
        .sliderBtn{
            position: relative;
            z-index: 4;
            cursor: pointer;
            img{
                height: 2rem;
                width: auto;
                filter: invert(1);
            }
        }
        .next{
            margin-right: var(--spacingLg);
        }
        .prev{
            margin-left: var(--spacingLg);
            img{
                transform: scaleX(-1);
            }
        }
        .toContent{
            position: absolute;
            cursor: pointer;
            left: 50%;
            bottom: 2rem;
            img{
                height: 2rem;
                width: auto;
                filter: invert(1);
                transform: rotate(90deg);
                animation: arrowDown 1s infinite alternate;
            }
        }
    }
    </style>