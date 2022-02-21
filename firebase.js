
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa9l-tzZ9rRq761fwsLiTYYUjtNa8ELJs",
  authDomain: "tienda-online-9f185.firebaseapp.com",
  projectId: "tienda-online-9f185",
  storageBucket: "tienda-online-9f185.appspot.com",
  messagingSenderId: "996166962378",
  appId: "1:996166962378:web:0da48d821a273a84e0f833"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;