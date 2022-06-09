import firebase from "firebase";
import "firebase/auth";
import "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyDXoudehd3aUhKK_3riomdKgYmogdpzSm0",
  authDomain: "spotify-js-2c6dd.firebaseapp.com",
  projectId: "spotify-js-2c6dd",
  storageBucket: "spotify-js-2c6dd.appspot.com",
  messagingSenderId: "1071142942737",
  appId: "1:1071142942737:web:6eecb0f89ae3d527e059b0",
  measurementId: "G-K1FE44TK6Z"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
