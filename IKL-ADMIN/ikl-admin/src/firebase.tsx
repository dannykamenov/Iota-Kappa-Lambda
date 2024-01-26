// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOxD3UaAuNZJzXQ7leTtoSSa-_XULQTJs",
  authDomain: "ikl-1906-demo.firebaseapp.com",
  projectId: "ikl-1906-demo",
  storageBucket: "ikl-1906-demo.appspot.com",
  messagingSenderId: "266039487451",
  appId: "1:266039487451:web:7daa0d4b6abde843ce95fe",
  measurementId: "G-D9X0BSQV4V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = firebase.storage()