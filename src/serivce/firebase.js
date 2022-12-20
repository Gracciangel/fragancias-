// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDpOUUlmPl2QWn1--cPDkvKjXKYbK44bM",
  authDomain: "fragancias-ebd1f.firebaseapp.com",
  projectId: "fragancias-ebd1f",
  storageBucket: "fragancias-ebd1f.appspot.com",
  messagingSenderId: "848803697600",
  appId: "1:848803697600:web:4581461afe8c1b39e12e25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  dataBase = getFirestore(app)
