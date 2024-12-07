// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAC-x3r14zD9UTfR7s5I0_OladyW_LFB0o",
  authDomain: "chill-gamer-3b17d.firebaseapp.com",
  projectId: "chill-gamer-3b17d",
  storageBucket: "chill-gamer-3b17d.firebasestorage.app",
  messagingSenderId: "462549750895",
  appId: "1:462549750895:web:89734cb862f9cdfeece99a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
