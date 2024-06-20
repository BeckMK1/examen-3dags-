<template>
    <div class="projectsShowCase">
        <NuxtLink class="project" :to="project.link" v-for="(project, index) in projects">
            <img :src="project.image" alt="">
            <h3 v-if="project.lead != ''">{{ project.title }}<br/>af {{ project.lead }}</h3>
            <h3 v-else>{{ project.title }}</h3>
            <div class="info">
                <div class="info-content" >
                    <p>{{ project.content }}</p>
                </div>
            </div>
        </NuxtLink>
    </div>
  </template>
  <script setup>
  const projects = ref([
    {
        title:"Rekt Projektet",
        lead:"Dan verbaum",
        content:"I en kommune i Zürich, bedre kendt for sin industrie og sine indkøbsmuligheder, har Dan Verbaum skabt en oase, der har taget afsæt i det allerede eksisterende hus, som skulle bibeholdes men bygges ud. ",
        image:"/images/projekter/rekt/rekt1.jpg",
        link:"/projekter/rekt-projektet"
    },
    {
        title:"Curve Projektet",
        lead:"John p. herluf",
        content:"Det positive klima, der hersker i løbet af hele året på den caribiske ø, samt placeringen af grunden ved de 7,000 kvm sandstrand ved kysten, bestemte mere eller mindre på forhånd visse aspekter i Curve projektets design, mindes John P. Herluf som er arkitekten bag Curve projektet",
        image:"/images/projekter/curve/curve1.jpg",
        link:"/projekter/cruve-projektet"
    },
    {
        title:"Brohuset",
        lead:"Niels Hoy Hansen",
        content:"Klienterne bad Niels Hoy Hansen om at tegne en fast bolig med kontor på deres lille ejendom, som ligger en times kørsel fra Adelaide, Australien. ",
        image:"/images/projekter/brohuset/brohus1.jpg",
        link:"/projekter/brohuset"
    },
    {
        title:"Kasse projektet",
        lead:"",
        content:"Landskabet i Ordos plateau i Indre Mongoliet, er bredt og åbent, præget af klitter af sand og lav vegetation.",
        image:"/images/projekter/kasse/ks1.jpg",
        link:"/projekter/kasse-projektet"
    },
    {
        title:"Softline projektet",
        lead:"",
        content:"The West Side Soft Line Park i New York City er en kontinuerlig stigende form for brostruktur, der i løbet af de næste ti år bliver en unik lineær bypark",
        image:"/images/projekter/softline/sl1.jpg",
        link:"/projekter/softline-projektet"
    },
  ])

  </script>
  <style lang="scss" scoped>
    .projectsShowCase{
        display: grid;
        gap: 1rem;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        width: var(--contentWidthLg);
        margin: 0 auto;
        .project{
            position: relative;
            height: fit-content;
            border-radius: var(--radiusMd);
            overflow: hidden;
            &::after{
                content: "";
                background-color: hsl(0,0%,10%, 0.5);
                width: 100%;
                height: 100%;
                position: absolute;
                z-index: 3;
                user-select: none;
                left: 0;
            }
            h3{
                position: absolute;
                top:50%;
                left: 50%;
                transform: translateX(-50%) translateY(-50%);
                z-index: 4;
                text-align: center
            }
            .info{
                position: absolute;
                bottom: 0;
                width: 100%;
                box-sizing: border-box;
                overflow: hidden;
                z-index: 5;
                border-top-left-radius: var(--radiusMd);
                border-top-right-radius: var(--radiusMd);
                &-content{
                    transition: 250ms;
                    transform: translateY(100%);
                    padding: var(--spacingMd) var(--spacingSm);
                    background-color: var(--secondaryBg);
                }
            }
            &:hover{
                .info{
                    &-content{
                        transform: translateY(0);
                    }
                }
            }
            img{
                border-radius: var(--radiusMd);
                width: 100%;
                height: 300px;
                object-fit: cover;
                background-color: var(--tertiaryBg);
            }
        }
        @media(max-width:1300px){
            grid-template-columns: 1fr 1fr;
        }
        @media(max-width:700px){
            grid-template-columns: 1fr;
        }
    }
  </style>