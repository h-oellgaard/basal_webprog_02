// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  // Import Firestore
import { getAuth } from 'firebase/auth'; // Import Firebase authentication

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlxfl6JMweUHGpLFOEX38hInWhzQix3vY",
  authDomain: "dmlf-edc52.firebaseapp.com",
  projectId: "dmlf-edc52",
  storageBucket: "dmlf-edc52.appspot.com",
  messagingSenderId: "968651455726",
  appId: "1:968651455726:web:58763f84180a08595107ff",
  measurementId: "G-7G635B4PVZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);  // Initialize Firestore and assign it to db
// add auth to the export
const auth = getAuth(app); // Initialize Firebase authentication
export { db, auth };  // Export the Firestore database

