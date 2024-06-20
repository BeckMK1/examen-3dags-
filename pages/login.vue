<template>
	<div>
        <SubPageHeroCom image="/images/gallery/10jph.jpg" title="Admin login"></SubPageHeroCom>
        <div class="login">
            <input v-model="loginEmail" type="email" placeholder="Email">
            <input v-model="loginPassword" type="password" placeholder="Password">
            <button @click="login">login</button>
        </div>
        <BackendMessageCom :message="message"></BackendMessageCom>
    </div>
</template>
<script setup>
import { signInWithEmailAndPassword } from "firebase/auth";
const authCookie = useCookie('authCookie', {
  default: () => ([]),
  sameSite: 'none', 
  secure: true, // change to true in prod
  httpOnly: false,
  watch: true,
  maxAge: 86400, // 24h 
})
const loginPassword = ref("")
const loginEmail = ref("")
const nuxtApp = useNuxtApp()
const message = ref("")
function validateInput(){
    if(loginPassword.value == ""){
        message.value = 'intet password'
        return false
    }
    if(loginEmail.value == ""){
        message.value = 'intet email'
        return false
    }
    return true
}
async function login() {
    if(validateInput() == true){
        try {
            const { user } = await signInWithEmailAndPassword(
            nuxtApp.$auth, 
            loginEmail.value,
            loginPassword.value
            )
            console.log(user)
            authCookie.value = {
                accessToken: user.accessToken,
                uid: user.uid
            }
            navigateTo("/createNews")
        } catch (err) {
            console.log(err)
        }
    }
}
watch(message, async (newData, oldData)=>{
      if(newData != ''){
        setTimeout(()=>{
          message.value =''
        }, 3000)
      }
})
</script>
<style lang="scss" scoped>
    .login{
        width: var(--contentWidthLg);
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap:1rem;
        button{
            padding: 1rem;
            background-color: var(--secondaryBg);
            border-radius: var(--radiusSm);
        }
    }
</style>