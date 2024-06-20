<template>
	<div>
        <SubPageHeroCom image="/images/gallery/10dv.jpg" title="Oprat nyheder"></SubPageHeroCom>
        <div class="createNews">
            <div class="tabs">
                <button class="btn" @click="currentTab = 'create'">Oprat nydheder</button>
                <button class="btn" @click="currentTab = 'edit'">rediger nydheder</button>
            </div>
            <div class="create tab" v-if="currentTab == 'create'">
                <input type="text" v-model="articel.title" placeholder="Titel*">
                <input type="text" v-model="articel.content" placeholder="resume">
                <textarea v-model="articel.fullContent" placeholder="artikel"></textarea>
                <p><em>Du kan bruge html tags i arktiklen </em></p>
                <input type="text" v-model="articel.image" placeholder="link til image">
                <button @click="createNews">Oprat</button>
            </div>
            <div class="edit tab" v-if="currentTab == 'edit'">
                <AccordionCom v-for="article in articles" :title="article.data.title">
                <input type="text" v-model="article.data.title" placeholder="Titel*">
                <input type="text" v-model="article.data.content" placeholder="resume">
                <textarea v-model="article.data.fullContent" placeholder="artikel"></textarea>
                <input type="text" v-model="article.data.image" placeholder="link til image">
                <div class="btns">
                    <button @click="updateNews(article)">edit</button>
                    <button @click="deleteNews(article.id)">delete</button>
                </div>
                </AccordionCom>
            </div>
        </div>
        <Teleport to="body">
            <BackendMessageCom v-if="comfirmMessage != ''" :message="comfirmMessage"></BackendMessageCom>
        </Teleport>
    </div>
</template>
<script setup>
import { collection, addDoc, getDocs, setDoc, deleteDoc, doc } from "firebase/firestore"; 
const articel = ref({
    title:'',
    content:'',
    fullContent:'',
    image:''
})
const articles = ref([])
const currentTab = ref("create")
const comfirmMessage = ref("")
const nuxtApp = useNuxtApp()
function validateCreate(){
    if(articel.value.title == ""){
        comfirmMessage.value = 'ingen title'
        return false
    }
    return true
}
function validateEdit(title){
    if(title == ""){
        comfirmMessage.value = 'ingen title'
        return false
    }
    return true
}
async function createNews(){
    if(validateCreate() == true){
    try {
  const docRef = await addDoc(collection(nuxtApp.$firestore, "articles"), {
    title:articel.value.title,
    content:articel.value.content,
    fullContent:articel.value.fullContent,
    image:articel.value.image
  });
  articel.value.title = ''
  articel.value.content = ''
  articel.value.fullContent = ''
  articel.value.image = ''
  comfirmMessage.value = "nyhed oprettede"
  getNews()
} catch (err) {
  console.error("Error adding document: ", err);
}
}
}
async function deleteNews(id){
    try{
        const docData = doc(nuxtApp.$firestore, "articles", id);
       await deleteDoc(docData)
       comfirmMessage.value = "du er nu afmeldt"
       getNews()
      }catch(err){
        console.log(err)
      }
}
async function updateNews(article){
    if(validateEdit(article.data.title) == true){
        try{
        await setDoc(doc(nuxtApp.$firestore, "articles", article.id), {
            title:article.data.title,
            content:article.data.content,
            fullContent:article.data.fullContent,
            image:article.data.image
        });
        getNews()
        } catch(err){
            console.log(err)
        }
    }
}
async function getNews(){
    articles.value = []
    try{
    const querySnapshot = await getDocs(collection(nuxtApp.$firestore, "articles"));
    querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    articles.value.push({
        id:doc.id,
        data:doc.data(),
    })
    });
    }catch(err){
        console.log(err)
    }

}
  getNews()
watch(comfirmMessage, async (newData, oldData)=>{
      if(newData != ''){
        setTimeout(()=>{
            comfirmMessage.value =''
        }, 3000)
      }
})
</script>
<style lang="scss">
.createNews{
    width: var(--contentWidthLg);
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap:1rem;
        .tabs{
            display: flex;
            gap: 1rem;
        }
        button{
            padding: 1rem;
            background-color: var(--secondaryBg);
            border-radius: var(--radiusSm);
        }
        .tab{
        margin: auto;
        display: flex;
        flex-direction: column;
        gap:1rem;
        width: 100%;
        &.create{
            align-items: center;
            input, textarea{
            width: 50%;
            @media(max-width:700px){
                width: 100%;
            }
            }
        }
        input, textarea{
            width: 100%;
        }
        &.edit{
            textarea{
                height: 200px;
            }
            .btns{
                display: flex;
                    gap: 1rem;
            }
            button{
                width: 50%;
                background-color: var(--tertiaryBg);
            }
        }
        p{
            text-align: start;
            opacity: 0.5;
            margin-bottom: 0.5rem;
        }
        }
}
</style>