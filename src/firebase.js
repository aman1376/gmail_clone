import firebase from 'firebase/compat/app';
import "firebase/compat/auth"
import "firebase/compat/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyDjtuddeHtKcsblXGBwso5QyvJgvviNSWE",
    authDomain: "clone-e9c23.firebaseapp.com",
    projectId: "clone-e9c23",
    storageBucket: "clone-e9c23.appspot.com",
    messagingSenderId: "475062174024",
    appId: "1:475062174024:web:7438a034b4fbc056f9f37d",
    measurementId: "G-SMJVNBGVGM"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider= new firebase.auth.GoogleAuthProvider();

export {db,auth,provider};