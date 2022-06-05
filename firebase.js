// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1lz-MqGnITLmz_St9o6Ypgx72BgwhYbg",
  authDomain: "tinder-clone-native-57298.firebaseapp.com",
  projectId: "tinder-clone-native-57298",
  storageBucket: "tinder-clone-native-57298.appspot.com",
  messagingSenderId: "604484189186",
  appId: "1:604484189186:web:109a37f9cfa8f0cfc47b1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore()

export { auth, db }