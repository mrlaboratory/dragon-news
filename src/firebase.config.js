// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHucSV6iT6M7dLPYY1lkv_HGXA83e78K4",
  authDomain: "dragon-news-f60ca.firebaseapp.com",
  projectId: "dragon-news-f60ca",
  storageBucket: "dragon-news-f60ca.appspot.com",
  messagingSenderId: "582949907377",
  appId: "1:582949907377:web:f67dc4cef2df3206d8eb90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app