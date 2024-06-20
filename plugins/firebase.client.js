import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
export default defineNuxtPlugin(nuxtApp => {
    const firebaseConfig = {
        apiKey: "AIzaSyDl7lxYd7CL1ZkGII5yyGVyGjwC4pFkjEg",
        authDomain: "examen-3d377.firebaseapp.com",
        projectId: "examen-3d377",
        storageBucket: "examen-3d377.appspot.com",
        messagingSenderId: "852578741292",
        appId: "1:852578741292:web:00c40ce9a356819d65b589"
      };
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app)
      const firestore = getFirestore(app)
      
    nuxtApp.vueApp.provide('auth', auth)
    nuxtApp.provide('auth', auth)

    nuxtApp.vueApp.provide('firestore', firestore)
    nuxtApp.provide('firestore', firestore)
})