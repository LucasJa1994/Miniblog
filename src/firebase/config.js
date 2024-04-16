import { initializeApp } from "firebase/app"
// importando firebase
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC2rqVtoH7oXZZsEqfhVWjMDgU2ogoqgo8",
  authDomain: "miniblog-ref-d8eaa.firebaseapp.com",
  projectId: "miniblog-ref-d8eaa",
  storageBucket: "miniblog-ref-d8eaa.appspot.com",
  messagingSenderId: "392727803273",
  appId: "1:392727803273:web:e761e18eea6242be20dd58",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }
