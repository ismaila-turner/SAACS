import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword ,sendPasswordResetEmail,EmailAuthProvider } from 'firebase/auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { getDatabase, ref, push, onValue } from 'firebase/database';
import 'firebase/firestore';
import { getFirestore ,addDoc} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { useContext } from 'react';

const firebaseConfig = {
  // Add your Firebase config here
  apiKey: "AIzaSyABNLH4s2jZsnkE-lsHLaoJLwoPtukD_-c",
  authDomain: "saacs-b0f1f.firebaseapp.com",
  projectId: "saacs-b0f1f",
  storageBucket: "saacs-b0f1f.appspot.com",
  messagingSenderId: "427689594569",
  appId: "1:427689594569:web:672e6ae7cee5463cffc718",
  measurementId: "G-7DKNKYG4YV"
};

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);
firebase.initializeApp({
  apiKey: "AIzaSyABNLH4s2jZsnkE-lsHLaoJLwoPtukD_-c",
  authDomain: "saacs-b0f1f.firebaseapp.com",
  projectId: "saacs-b0f1f",
  storageBucket: "saacs-b0f1f.appspot.com",
  messagingSenderId: "427689594569",
  appId: "1:427689594569:web:672e6ae7cee5463cffc718",
  measurementId: "G-7DKNKYG4YV"

});

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);
const storage = getStorage(); 

const user = auth.currentUser;
 export {auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,sendPasswordResetEmail ,db,storage, user,EmailAuthProvider };
//   }export default firebase;