<template>
    <div>
      <SubPageHeroCom image="/images/gallery/hotel22dv.jpg" title="Kontakt"></SubPageHeroCom>
      <div class="contact">
        <div class="contact-info">
          <div class="text">
            <h3>Design Architects</h3>
            <p>Adresse: <a class="exLink" href="https://maps.app.goo.gl/DrTrGQLuwGLBikxF7" target="_blank">Vinkelvej 39, 8000 Aarhus</a></p>
            <p>Telefon: <a class="exLink" href="tel:+4523351000">23 35 10 00</a></p>
            <p>E-mail: <a class="exLink" href="mailto:info@design.dk">info@design.dk</a></p>
          </div>
          <div class="newsLetter">
            <h3>Tilmeld dig vores nyhedsbrev i dag!</h3>
            <input type="email" v-model="email" placeholder="Email">
            <div class="btns">
              <button @click="addToNewsLetter">Tilmeld</button>
              <button @click="removeFromNewsLetter">Afmeld</button>
            </div>
          </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2220.0941713888647!2d10.234843200000002!3d56.19005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c3e514bb1aacd%3A0x25aad602748f0a17!2sVinkelvej%2039%2C%208240%20Risskov!5e0!3m2!1sen!2sdk!4v1718693667215!5m2!1sen!2sdk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <Teleport to="body">
        <BackendMessageCom v-if="comfirmMessage != ''" :message="comfirmMessage"></BackendMessageCom>
      </Teleport>
    </div>
  </template>
  <script setup>
  import { doc, setDoc, getDoc, deleteDoc } from "firebase/firestore"; 
  const email = ref('')
  const nuxtApp = useNuxtApp()
  const comfirmMessage = ref("")
    async function removeFromNewsLetter(){
      try{
        const docData = doc(nuxtApp.$firestore, "nydhedsbrev", email.value);
       await deleteDoc(docData)
       comfirmMessage.value = "du er nu afmeldt"
      }catch(err){
        console.log(err)
      }
    }
    async function addToNewsLetter(){
          try {
            const checkData = doc(nuxtApp.$firestore, "nydhedsbrev", email.value);
          const checkSnap = await getDoc(checkData)
        if(!checkSnap.exists()){
            const docRef = await setDoc(doc(nuxtApp.$firestore,'nydhedsbrev', email.value), {
              email:email.value
            });
            comfirmMessage.value = 'du er nu tilmeldt'

            return
          }
          comfirmMessage.value = 'user exists'
        } catch (e) {
          console.error("Error adding document: ", e);
        }

    }
    watch(comfirmMessage, async (newData, oldData)=>{
      if(newData != ''){
        setTimeout(()=>{
          comfirmMessage.value =''
        }, 3000)
      }
    })
  </script>
  <style lang="scss">
    .contact{
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      width: var(--contentWidthLg);
      margin: auto;
      gap: 1rem;
      &-info{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        grid-column: 1/5;
        .text{
        padding: var(--spacingLg);
        background-color: var(--secondaryBg);
        border-radius: var(--radiusMd);
        h3{
          margin-bottom: var(--spacingSm);
        }
        p{
          font-weight: bold;
          margin-bottom: var(--spacingSm);
        }
      }
      .newsLetter{
        padding: var(--spacingLg);
        background-color: var(--secondaryBg);
        border-radius: var(--radiusMd);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        .btns{
          display: flex;
          gap: 0.5rem;
        }
        button{
            padding: 1rem;
            background-color: var(--tertiaryBg);
            border-radius: var(--radiusSm);
        }
        input{
          width: 100%;
        }
      }
      }
      iframe{
        grid-column: 5/13;
        width: 100%;
        border-radius: var(--radiusMd);
        filter: invert(1);
      }
      @media(max-width:1600px){
        &-info{
          grid-column: 1/13;
        }
        iframe{
          grid-column: 1/13;
        }
      }
    }
  </style>