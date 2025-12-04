import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyD6heuBLHnqI2SCZz28ZyAkyTkq8Hv53As",
    authDomain: "clone-dd029.firebaseapp.com",
    projectId: "clone-dd029",
    storageBucket: "clone-dd029.firebasestorage.app",
    messagingSenderId: "651733516482",
    appId: "1:651733516482:web:14eb6f5aeb54e63ae8bb5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
