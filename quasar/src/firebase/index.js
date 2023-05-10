import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyANj09hkXQwHKv2pwe85sVWmA7fGeJwPYE",
  authDomain: "qusaratodo.firebaseapp.com",
  projectId: "qusaratodo",
  storageBucket: "qusaratodo.appspot.com",
  messagingSenderId: "164053121855",
  appId: "1:164053121855:web:79cd64654f7f202a08f18a",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };



