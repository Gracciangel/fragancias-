// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmvp7v-SKjK5u-dPKYNbMkJMXdCERYSKY",
  authDomain: "fragancias-225c4.firebaseapp.com",
  projectId: "fragancias-225c4",
  storageBucket: "fragancias-225c4.appspot.com",
  messagingSenderId: "493902287204",
  appId: "1:493902287204:web:2b489d21cb6de87d2baa71",
  measurementId: "G-YVD85X266S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const  dataBase = getFirestore(app)