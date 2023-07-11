import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDgTluWE5frU-AnbdZStu5VjVqArvby9p0",
  authDomain: "finalreactcac.firebaseapp.com",
  projectId: "finalreactcac",
  storageBucket: "finalreactcac.appspot.com",
  messagingSenderId: "184543538660",
  appId: "1:184543538660:web:e3f02bd1c416feffde2bf1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
