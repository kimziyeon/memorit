// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIBVLlLJ1dOXyiEkYtbEHqbQCeAyQTCSA",
  authDomain: "memorit-a0871.firebaseapp.com",
  projectId: "memorit-a0871",
  storageBucket: "memorit-a0871.appspot.com",
  messagingSenderId: "1041012782009",
  appId: "1:1041012782009:web:5a5d4c7ccd4ba263ef3c68",
  measurementId: "G-MC0FHX64Q2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);