// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import { doc, addDoc, getDoc, setDoc, getDocs, query, where, getFirestore, collection } from 'firebase/firestore/lite';
import { getAuth, updatePassword, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, confirmPasswordReset, beforeAuthStateChanged, onAuthStateChanged } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxNVSJXh1vMSus6ovg_KxjauHRo4YjqQk",
  authDomain: "vehicle-area-447e1.firebaseapp.com",
  projectId: "vehicle-area-447e1",
  storageBucket: "vehicle-area-447e1.appspot.com",
  messagingSenderId: "598987863108",
  appId: "1:598987863108:web:c0971d52d4e1a56e4ef811",
  measurementId: "G-XQ9QYYMKMH"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export {
  app,
  auth,
  storage,
  getAuth,
  db,
  doc,
  getDoc,
  setDoc,
  addDoc,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  ref,
  uploadBytes,
  getDownloadURL,
  signOut,
  updatePassword,
  collection,
  getDocs,
  query,
  where
};