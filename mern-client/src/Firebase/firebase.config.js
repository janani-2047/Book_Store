// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmBcaicuIWidfN0C8o1a_vu8ikc1b2tHg",
  authDomain: "book-inventory-app-1acc9.firebaseapp.com",
  projectId: "book-inventory-app-1acc9",
  storageBucket: "book-inventory-app-1acc9.appspot.com",
  messagingSenderId: "132905266790",
  appId: "1:132905266790:web:99b1412afe631b93a287a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;