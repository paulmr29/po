// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKi6s7PuxI5-eLq_-YxvYtKS-ONsla_eE",
  authDomain: "tienda-nsp.firebaseapp.com",
  projectId: "tienda-nsp",
  storageBucket: "tienda-nsp.appspot.com",
  messagingSenderId: "961405695071",
  appId: "1:961405695071:web:5e814682b26461d00e57ea",
  measurementId: "G-W78P3MT5TS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);