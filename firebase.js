// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbndxep9YbYwJxtfo0UGPeyZuP9pzzFEE",
  authDomain: "vehicle-area.firebaseapp.com",
  projectId: "vehicle-area",
  storageBucket: "vehicle-area.appspot.com",
  messagingSenderId: "429101457917",
  appId: "1:429101457917:web:649fb8241e2fbb361c7994",
  measurementId: "G-RH0XE3G3EQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);