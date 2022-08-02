import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDoc, getDocs } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfwqSEvscunEzZZP47xVbUmxOiHtKdyF0",
  authDomain: "vue-project-e59bd.firebaseapp.com",
  projectId: "vue-project-e59bd",
  storageBucket: "vue-project-e59bd.appspot.com",
  messagingSenderId: "362529252968",
  appId: "1:362529252968:web:b6453f0a9cb33aa45afddd",
  measurementId: "G-SE1PSWXP4B",
};

//init firebase
initializeApp(firebaseConfig);

// get collection data
const db = getFirestore();
const colRef = collection(db, "posts");

export { colRef, db };
