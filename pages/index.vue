<template>
	<div>
		<div class="slider-container"> 
			<div class="slider">
				<div class="prev sliderBtn" @click="isAutoPlay = false, prev()"><img src="/images/icons/chevron-right-solid.svg" alt=""></div>
				<div class="slider-images">
					<div class="slide" v-for="(slide, index) in slides" :key="index" :class="index == currentSlide ? 'slideActive':''">
						<h3>{{ slide.title }}</h3>
						<h4>Af {{ slide.author }}</h4>
						<img  :src="slide.image" alt="">
					</div>
				</div>
				<div class="next sliderBtn" @click="isAutoPlay = false, next()"><img src="/images/icons/chevron-right-solid.svg" alt=""></div>
				<a href="#Welcome" class="toContent"><img src="/images/icons/chevron-right-solid.svg" alt=""></a>
			</div>
		</div>
		<section>
			<article ref="content1" id="Welcome" class="flexContent animateSection">
				<img src="/images/gallery/nhh1.jpg" alt="">
				<div class="text">
					<h1>Velkommen til Design Architects</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
					<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
			</article>
			<article ref="content2" class="flexContent animateSection">
				<div class="text">
					<h2>Hvem er vi?</h2>
					<p>Design Architects består af de 3 partnere  Dan Verbaum, John P. Herluf og Niels Hoy Hansen som hver især gennem årene er blevet internationalt anerkendte for deres spændende og nyskabende bygge projekter. </p>
					<p>De er nu gået sammen om at skabe firmaet Design Architects i forsøget på at skabe et kreativt, udviklende og inspirerende miljø.  Firmaet henvender sig til både det danske marked, men i allerhøjeste grad også det udenlandske. </p>
					<NuxtLink class="linkBtn" to="/OmDesignArchitects">Læs mere</NuxtLink>
				</div>
				<img src="/images/gallery/11nhh.jpg" alt="">
			</article>
		</section>
		<NewsShowCaseCom></NewsShowCaseCom>
	</div>
</template>
<script setup>
import { doc } from 'firebase/firestore';

const currentSlide = ref(0)
const isAutoPlay = ref(true)
const content1 = ref(null)
const content2 = ref(null)
const slides = ref([
	{
		title:"Rekt projektet",
		author:"Dan Verbaum",
		image:"/images/projekter/rekt/rekt1.jpg"
	},
	{
		title:"Curve Projektet",
		author:"John p. herluf",
		image:"/images/projekter/curve/curve1.jpg"
	},
	{
		title:"Brohus",
		author:"Niels Hoy Hansen",
		image:"/images/projekter/brohuset/brohus1.jpg"
	},
])
function next(){
	if(currentSlide.value == slides.value.length - 1){
		currentSlide.value = 0
		return
	}
	currentSlide.value++
}
function prev(){
	if(currentSlide.value == 0){
		currentSlide.value = slides.value.length - 1
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
function animateIn(){
	const desktop = window.matchMedia("(min-width:1000px)");
	if(desktop.matches){
	let textSections = document.querySelectorAll(".animateSection");
		let options = {
		threshold: 1.0
	};
		let callback = (entries, observer) => {
		entries.forEach((entry) =>{
			if(entry.isIntersecting == true){
				entry.target.classList.add("isObserved")
			}
		})
		}
		let observer =  new IntersectionObserver(callback, options);
		for(let textSection of textSections){
		observer.observe(textSection);	
		}
	}
}
onMounted(()=>{
	autoPlay()
	animateIn()
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
	height: 100vh;
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
		width: 100vw;
		height: 100%;
		display: flex;
		justify-content: start;
		align-items: center;
		.slide{
			opacity: 0;
			transition: 500ms;
			&.slideActive{
				opacity: 1;
				h3,h4{
				display: block;
				}
			}
			h3,h4{
				display: none;
			}
		}
		h3, h4{
			position: relative;
			z-index: 4;
			margin-left: 15rem;
			}
		h3{
			font-size: 3rem;
		}
		@media(max-width:1000px){
			justify-content: center;
			h3, h4{
				margin-left: 0;
			}
		}
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
			opacity: 1;
			position: absolute;
			top: 0;
			left: 0;
			background-color: var(--tertiaryBg);
		}
	}
	.sliderBtn{
		position: relative;
		z-index: 4;
		opacity: 0;
		cursor: pointer;
		transition: 250ms;
		img{
			height: 2rem;
			width: auto;
			filter: invert(1);
		}
		@media(max-width:700px){
			display: none;
		}
	}
	&:hover{
		.sliderBtn{
			opacity: 1;
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
section{
	.flexContent{
		display: flex;
		gap: 1rem;
		margin-bottom:var(--spacingXl);
		.text{
			p:nth-child(2){
				margin-bottom: 1rem;
			}
			h1, h2{
			margin-bottom: 1rem;
			}
			&:has(.linkBtn){
				p{
					margin-bottom: 1rem;
				}
			}
		}

	}
}
@keyframes arrowDown {
	from{
		transform: rotate(90deg) translateX(0);
	}
	from{
		transform: rotate(90deg) translateX(1rem);
	}
}

</style>