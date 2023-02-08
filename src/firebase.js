// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);