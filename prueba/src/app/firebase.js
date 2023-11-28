// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtXkxqrWQZaY1oye3ce8g9qsrdD1NcF2Y",
  authDomain: "next-auth-d6e19.firebaseapp.com",
  projectId: "next-auth-d6e19",
  storageBucket: "next-auth-d6e19.appspot.com",
  messagingSenderId: "655559535848",
  appId: "1:655559535848:web:ccc6e2aa07ae6bb16ced5d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
