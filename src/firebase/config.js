// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3WCyF7RpGUyFDnBdoHphszjp0uWUiMGE",
  authDomain: "react-curso-journal-91e8b.firebaseapp.com",
  projectId: "react-curso-journal-91e8b",
  storageBucket: "react-curso-journal-91e8b.appspot.com",
  messagingSenderId: "1099101879618",
  appId: "1:1099101879618:web:cb6797e6b659da3ae65cdb"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);