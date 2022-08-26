import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyA6UPGb0ST69ch9x1oS2LDFFdGPz-UTKQ4",
  authDomain: "mylayerapp-f7d1b.firebaseapp.com",
  projectId: "mylayerapp-f7d1b",
  storageBucket: "mylayerapp-f7d1b.appspot.com",
  messagingSenderId: "542386592206",
  appId: "1:542386592206:web:8a1dea09c715ead106f39f"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


const auth = getAuth();

export { app, db, auth };
