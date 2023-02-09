// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,} from "firebase/auth";
// import { getFirestore, query, getDocs, collection, where, addDoc } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDmz4CEtBk8KKI1kBTD-yyt2NYk6N3JQUQ",
  authDomain: "calendar-app-7f344.firebaseapp.com",
  projectId: "calendar-app-7f344",
  storageBucket: "calendar-app-7f344.appspot.com",
  messagingSenderId: "408982903980",
  appId: "1:408982903980:web:721dee1b24ebb42afbd309",
  measurementId: "G-FB93W69VRC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const storage = getStorage(app);
const auth = getAuth(app);
// const db = getFirestore(app);
export {auth}