// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDByKN0zIMT-JVcldxTqiv3B_4IVIaHOlU",
  authDomain: "classydog-firebase.firebaseapp.com",
  projectId: "classydog-firebase",
  storageBucket: "classydog-firebase.appspot.com",
  messagingSenderId: "1086652554421",
  appId: "1:1086652554421:web:5c2b51c01ca28f597a72fc",
  measurementId: "G-E659PGM9M7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
