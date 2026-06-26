import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";


const firebaseConfig = {

  apiKey: "AIzaSyDZXwUVGGgg8hlUYCpg0_HLz-iIlmffQcU",
  authDomain: "pkm-memories.firebaseapp.com",
  projectId: "pkm-memories",
  storageBucket: "pkm-memories.firebasestorage.app",
  messagingSenderId: "396965513148",
  appId: "1:396965513148:web:4a5b032fdccb10436ecdb9"


};



const app = initializeApp(firebaseConfig);



export const auth = getAuth(app);



export const db = getFirestore(app);