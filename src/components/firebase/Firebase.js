import {initializeApp} from 'firebase/app'
import {
    getFirestore, collection, getDocs

} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAXMMmt7BKyf5erQDnHDaX04Fr-dWLf1Ao",
    authDomain: "ecommerce-b36a9.firebaseapp.com",
    projectId: "ecommerce-b36a9",
    storageBucket: "ecommerce-b36a9.appspot.com",
    messagingSenderId: "406075725453",
    appId: "1:406075725453:web:7ec0a40e55e228f5c0f4c4",
    measurementId: "G-N0L4T7MEJ0"
  };

  initializeApp(firebaseConfig)

  const db = getFirestore()

  const colRef = collection(db, 'products')
  const auth = getAuth()


 

  export {auth, colRef, db}