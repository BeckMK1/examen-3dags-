<template>
    <div>
        <div class="newShowCase">
            <h2>Nyheder</h2>
            <div class="articlesContainer">
                <div class="articles">
                    <article v-for="article in dbArticles"  >
                        <div class="imageLink">
                            <img :src="article.image == '' ? '/images/gallery/1dv.jpg': article.image" alt="">
                            <p class="hoverLink" @click="currentArticle = article">Læs mere</p>
                        </div>
                        <h3>{{article.title}}</h3>
                        <p>{{ article.content }}</p>
                    </article>
                </div>
            </div>
        </div>
        <Teleport to="body">
            <NewModalCom @close="closeModal" v-if="Object.keys(currentArticle).length != 0" :newsContent="currentArticle"></NewModalCom>
        </Teleport>
    </div>
  </template>
  <script setup>
  import { collection, getDocs } from "firebase/firestore";
  const articles = ref([
    {
        title:"PARTNER I DESIGN ARCHITECTS, DAN VERBAUM SOM JURY",
        content:"Dan Verbaum er af  The sixt European Biennial of Landscape Architecture of Barcelona",
        fullContent:`<p>Dan Verbaum er af <em> The sixt European Biennial of Landscape 
        Architecture of Barcelona</em> blevet inviteret som medlem af den 
        Internationale Jury, som skal vælge finalister til den præstigefyldte 
        Rosa Barba Price. Den 6. udgave af biennalen foregår i Barcelona først
        i februar 2023.</p>`,
        image:"/images/campus1.jpg",
    },
    {
        title:"INVITERET TIL GENNEMGANG AF KONKURRENCE I RIBE ",
        content:"Design Architects er inviteret til deltagelse i gennemgang af projektkonkurrencen om Ribe Domkirkeplads",
        fullContent:`<p>Design Architects er inviteret til deltagelse i gennemgang af projektkonkurrencen om Ribe 
        Domkirkeplads. Projektkonkurrencen og det efterfølgende projekt
        blev udviklet og gennemført i et partnerskab mellem Esbjerg 
        Kommune og Realdania. Klik <a class="exLink" target="_blank" href="https://realdania.dk/projekter/ribe-domkirkeplads">her</a> for at se projektbeskrivelsen.</p>`,
        image:"/images/campus1.jpg",
        
    },
    {
        title:"URBAN MEDIASPACE PÅ ÅRHUS HAVN ER IGANG ",
        content:"De nye campus arealer ved Struer Gymnasium og Struer Museum tog form helt tilbage i 2010.",
        fullContent:`<p>De nye campus arealer ved Struer Gymnasium og Struer Museum
        tog form helt tilbage i 2010. Udearealerne stod færdige i foråret 2012, og nu kigger vi tilbage mod projektets mål og målopfyldelse. Klik <a class="exLink" target="_blank" href="https://www.kristinejensen.dk/campus%20struer.html">her </a>for at se Realdanias formulering af projektet. </p>`,
        image:"/images/campus1.jpg",
    },
    {
        title:"INDBUDT TIL KONKURRENCE OM BÜLOWS PLADS",
        content:"Placeholder Placeholder Placeholder Placeholder",
        fullContent:`<p>Design Architects er udvalgt til at deltage i konkurrence om ALMENBOLIG+ for KAB.
        Virksomheden skal samarbejde med De Meeuw Oirschot b.v, Cubo Arkitekter 
        og COWI om at udvikle op til 800 boliger.</p>`,
        image:"/images/campus1.jpg",
    }
  ])
  const dbArticles = ref([])
  const nuxtApp = useNuxtApp()
  async function getNews(){
    try{
    const querySnapshot = await getDocs(collection(nuxtApp.$firestore, "articles"));
    querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    dbArticles.value.push(doc.data())
    });
    }catch(err){
        console.log(err)
    }
  }
  getNews()
  const currentArticle = ref({})
  function closeModal(){
    currentArticle.value = {}
  }
  </script>
  <style lang="scss" scoped>
  .newShowCase{
    height: 500px;
    width: var(--contentWidthLg);
    margin: 0 auto;
    position: relative;
    h2{
        text-align: center;
        margin-bottom: var(--spacingMd)
    }
    .sliderBtn{
    }
  }
    .articlesContainer{
        width: 100%;
        overflow-x: scroll;
        position: absolute;
    }
    .articles{
        display: flex;
        gap: var(--spacingMd);
        width: fit-content;
        article{
            background-color: var(--secondaryBg);
            padding: 1.5rem;
            border-radius: var(--radiusMd);
            display: flex;
            flex-direction: column;
            gap: var(--spacingSm);
            width: 400px;
            .imageLink{
                position: relative;
                img{
                    width: 100%;
                    object-fit: cover;
                    border-radius: var(--radiusMd);
                    height: 300px;
                }
                .hoverLink{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color:hsla(0,0%,10%,0.5);
                    border-radius: var(--radiusMd);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-weight: 600;
                    opacity: 0;
                    transition: 250ms;
                    cursor: pointer;
                    @media(max-width:1000px){
                        opacity: 1;
                    }
                }
            }
            &:hover{
                .imageLink .hoverLink{
                    opacity: 1;
                }
            }
        }
    }
  </style>