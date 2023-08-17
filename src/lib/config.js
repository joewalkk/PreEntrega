// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';



const firebaseConfig = {
  apiKey: import.meta.env.VITE_FBS_API_KEY,
  authDomain: import.meta.env.VITE_FBS_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FBS_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FBS_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FBS_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FBS_APP_ID,
  measurementId: import.meta.env.VITE_FBS_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);