// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcpt0HUscb9xKMVZ51ENBDjvGKL6JMftc",
  authDomain: "clone-a6d8b.firebaseapp.com",
  projectId: "clone-a6d8b",
  storageBucket: "clone-a6d8b.appspot.com",
  messagingSenderId: "445796603912",
  appId: "1:445796603912:web:675656e54db708243dd9bd",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
