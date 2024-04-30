import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBllMXLtytZ_j-PPkZ28ie0arZdu5fIWAk",
  authDomain: "mytodolist-be2be.firebaseapp.com",
  projectId: "mytodolist-be2be",
  storageBucket: "mytodolist-be2be.appspot.com",
  messagingSenderId: "290483595418",
  appId: "1:290483595418:web:e192acde7fe04871595723",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
