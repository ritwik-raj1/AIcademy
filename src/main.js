import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCdPHbzFQMh9aTF7w2OQmgDxlst656p35Q",
  authDomain: "aicademy-59b78.firebaseapp.com",
  projectId: "aicademy-59b78",
  storageBucket: "aicademy-59b78.appspot.com",
  messagingSenderId: "726804161315",
  appId: "1:726804161315:web:4002e581cb515176caa296"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
