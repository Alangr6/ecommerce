import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey:  process.env.REACT_APP_API_KEY,
  authDomain:'ecommerce-b36a9.firebaseapp.com',
  projectId:'ecommerce-b36a9',
  storageBucket:'ecommerce-b36a9.appspot.com',
  messagingSenderId:'406075725453',
  appId:'1:406075725453:web:7ec0a40e55e228f5c0f4c4',
  measurementId:'G-N0L4T7MEJ0',
}; 

initializeApp(firebaseConfig); 
const db = getFirestore();
const colRefProducts = collection(db, "products2");
const auth = getAuth();

export { auth, colRefProducts, db };
