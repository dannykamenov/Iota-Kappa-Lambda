import firebase from "firebase/compat/app";
import "firebase/compat/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBOxD3UaAuNZJzXQ7leTtoSSa-_XULQTJs",
    authDomain: "ikl-1906-demo.firebaseapp.com",
    databaseURL: "https://ikl-1906-demo-default-rtdb.firebaseio.com",
    projectId: "ikl-1906-demo",
    storageBucket: "ikl-1906-demo.appspot.com",
    messagingSenderId: "266039487451",
    appId: "1:266039487451:web:7daa0d4b6abde843ce95fe",
    measurementId: "G-D9X0BSQV4V"
  };

firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();