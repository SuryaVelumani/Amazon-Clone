
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA81zyUo0MU3bAWEnj4JKO2Aqt1mAjJ3nc",
  authDomain: "challenge-c0d64.firebaseapp.com",
  projectId: "challenge-c0d64",
  storageBucket: "challenge-c0d64.appspot.com",
  messagingSenderId: "508371399274",
  appId: "1:508371399274:web:9bf6e0cff7b848dee11013"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };