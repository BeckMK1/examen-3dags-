<template>
	<div>
        <header id="header">
            <div class="logo"><NuxtLink to="/"><img src="/images/logo.png" alt=""></NuxtLink></div>
            <nav class="desktopNav">
                <NuxtLink to="/OmDesignArchitects"> Om Design Architects </NuxtLink>
                <NuxtLink to="/alleProjekter">Projekter</NuxtLink>
                <NuxtLink to="/galleri">Galleri</NuxtLink>
                <NuxtLink to="/kontakt">Kontakt</NuxtLink>
                <NuxtLink to="/ansatte">Ansatte</NuxtLink>
                <NuxtLink to="/createNews" v-if="Object.keys(authCookie).length != 0 ">redigere nyheder</NuxtLink>
                <NuxtLink to="/login" v-if="Object.keys(authCookie).length == 0 ">login</NuxtLink>
                <button @click="logout" v-else>Log ud</button>
                <input type="text" placeholder="søg...">
            </nav>
            <div class="mobileNav">
                <Teleport to="body">
                    <div class="NavBg" @click="mobileOpen = false" v-if="mobileOpen == true"></div>
                </Teleport>
                <div @click="mobileOpen = !mobileOpen" class="navBugerBtn">{{mobileOpen == true? 'Close': 'Open'}}</div>
                <nav :class="mobileOpen == true ? 'open' : 'closed'" v-if="mobileOpen == true">
                <NuxtLink @click="mobileOpen = false" to="/OmDesignArchitects"> Om Design Architects </NuxtLink>
                <NuxtLink @click="mobileOpen = false" to="/alleProjekter">Projekter</NuxtLink>
                <NuxtLink @click="mobileOpen = false" to="/galleri">Galleri</NuxtLink>
                <NuxtLink @click="mobileOpen = false" to="/kontakt">Kontakt</NuxtLink>
                <NuxtLink @click="mobileOpen = false" to="/ansatte">Ansatte</NuxtLink>
                <NuxtLink @click="mobileOpen = false" to="/createNews" v-if="Object.keys(authCookie).length != 0 ">redigere nyheder</NuxtLink>
                <NuxtLink @click="mobileOpen = false" to="/login" v-if="Object.keys(authCookie).length == 0 ">login</NuxtLink>
                <button  @click="logout, mobileOpen = false" v-else>Log ud</button>
                <input type="text" placeholder="søg...">
                </nav>
            </div>
        </header>
        <div class="pageContent">
            <slot></slot>
        </div>
        <Transition name="btnFade">
            <a class="toTopBtn" v-if="showToTop" href="#header"><img src="/images/icons/arrow-up-solid.svg" alt=""></a>
        </Transition>
        <footer>
            <div class="info">
                <div class="text">
                    <p>Design Architects</p>
                    <a class="exLink" href="https://maps.app.goo.gl/DrTrGQLuwGLBikxF7" target="_blank">Vinkelvej 39, 8000 Aarhus</a>
                    <a class="exLink" href="tel:+4523351000">23 35 10 00</a>
                    <a class="exLink" href="mailto:info@design.dk">info@design.dk</a>
                </div>
            </div>
            <img class="logo" src="/images/logoShape.png" alt="">
            <nav>
                <NuxtLink to="/OmDesignArchitects"> Om Design Architects </NuxtLink>
                <NuxtLink to="/alleProjekter">Projekter</NuxtLink>
                <NuxtLink to="/galleri">Galleri</NuxtLink>
                <NuxtLink to="/kontakt">Kontakt</NuxtLink>
                <NuxtLink to="/ansatte">Ansatte</NuxtLink>
            </nav>
        </footer>
    </div>
</template>
<script setup>
const showToTop = ref(false)
const mobileOpen = ref(false)
const authCookie = useCookie('authCookie', {
  default: () => ([]),
  sameSite: 'none', 
  secure: true, // change to true in prod
  httpOnly: false,
  watch: true,
  maxAge: 86400, // 24h 
})
function logout(){
    authCookie.value = {}
}
function isTopBtn(){
    if(window.scrollY >= 50){
        showToTop.value = true
        return
    }
    showToTop.value = false
}
onMounted(()=>{
    window.addEventListener("scroll", isTopBtn)
})
</script>
<style lang="scss" scoped>
header{
    padding: var(--spacingMd) var(--spacingXl);
    display: grid;
    grid-template-columns:repeat(12, 1fr);
    position: absolute;
    top: 0;
    z-index: 6;
    min-width: 100vw;
    gap: 1rem;
    box-sizing: border-box;
    .logo{
        position: relative;
        z-index: 4;
        grid-column: 1/3;
        @media(max-width:1600px){
            grid-column: 1/8;
            justify-self: start;
        }
        @media(max-width:700px){
            grid-column: 1/13;
            justify-self: center;
        }
        img{
            width: 100%;
            max-height: 90px;
            object-fit: contain;

        }
    }
    .desktopNav{
        margin-top: 1.5rem;
        grid-column: 4/12;
        align-self: center;
        display: flex;
        gap: 2rem;
        padding: 1rem;
        background-color: hsla(0,0%,100%,0.2);
        backdrop-filter: blur(3px);
        width: fit-content;
        border-radius: var(--radiusSm);
        a, button, input{
            text-decoration: none;
            border-radius: var(--radiusSm);
            background-color: hsla(0,0%,100%,0.3);
            padding: 0.75rem;
            backdrop-filter: blur(3px);
            transition: 250ms;
            font-weight: 600;
            &:hover{
                transform: translateX(0.25rem);
            }
        }
    }
    .mobileNav{
        display: none;
    }
    @media(max-width:1880px){
    .desktopNav{
        display: none
    }
    .mobileNav{
        grid-column: 8/13;
        justify-self: end;
        align-self: center;
        display: block;
        border-radius: var(--radiusSm);
        transition: 250ms;
        &:has(.open){
            background-color: hsla(0,0%,100%,0.2);
            backdrop-filter: blur(3px);
        }
        padding: 1rem;
        .navBugerBtn{
            padding: 1rem;
            background-color: hsla(0,0%,100%,0.2);
            backdrop-filter: blur(5px);
            border-radius: var(--radiusSm);
            width: fit-content;
            margin-left: auto
        }
        nav{
            border-radius: var(--radiusSm);
            flex-direction: column;
            padding: 1rem;
            gap: 1rem;
            display: flex;
            transition: opacity 250ms;
            &.open{
                opacity: 1;
                visibility: visible;
            }
            &.closed{
                opacity: 0;
                visibility: hidden;
            }
            a, button, input{
                padding: 1rem;
                background-color: hsla(0,0%,100%,0.2);
                backdrop-filter: blur(5px);
                border-radius: var(--radiusSm);
            }
        }
    }
    }
    @media(max-width:700px){
        .mobileNav{
            grid-column: 1/13;
            justify-self: center;
            width: 100%;
            box-sizing: border-box;
            .navBugerBtn{
                width:100%;
                box-sizing: border-box;
                text-align: center;
            }
            nav{
                    a{
                    text-align: center;
                    }
                }
        }
    }
}
.pageContent{
    min-height: calc(100vh - 130px);
}
.toTopBtn{
    display: block;
    position: fixed;
    z-index: 5;
    right: var(--spacingLg);
    bottom: 2rem;
    background-color: var(--tertiaryBg);
    padding: 0.75rem 1rem 0.5rem 1rem;
    border-radius: 100%;
    img{
        height: 2rem;
        width: auto;
        filter: invert(1);
    }
}
footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    padding: var(--spacingMd) var(--spacingXl);
    background-color: var(--secondaryBg);
    margin-top: var(--sectionSpacing);
    box-sizing: border-box;
    gap:1rem;
    .info{
        display: flex;
        gap: 1rem;
        align-items: center;
        .text{
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            p:first-child{
                font-weight: 600;
            }
        }
    }
    .logo{
        display: block;
        height: 100px;
        width: auto;
    }
    nav{
        display: flex;
        flex-direction: column;
        gap: 0.5rem 0;
        a{
            font-weight: bold;
            text-decoration: none;
        }
    }
    @media(max-width:700px){
        flex-direction: column;
        align-items: center;
        gap:3rem;
        padding-bottom: 2rem;
        .info{
            text-align: center;
        }
        nav{
            text-align: center;
        }
    }
}
.NavBg{
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: hsla(0,0%,0%, 0.3);
    backdrop-filter: blur(3px);
    z-index: 5;
    top: 0;
    left: 0;
}
.btnFade-enter-active,
.btnFade-leave-active {
  transition: opacity 0.5s ease;
}

.btnFade-enter-from,
.btnFade-leave-to {
  opacity: 0;
}
</style>