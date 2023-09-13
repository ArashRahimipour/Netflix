
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB44c_A37IttKRMicy8bifd2NFEjgKzayQ",
  authDomain: "netflix-app-ae4c8.firebaseapp.com",
  projectId: "netflix-app-ae4c8",
  storageBucket: "netflix-app-ae4c8.appspot.com",
  messagingSenderId: "781098035051",
  appId: "1:781098035051:web:d71f82fa977fac39b84e2e",
  measurementId: "G-JCG4Q5V159"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)