// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: "netflixgpt-ans.firebaseapp.com",
  projectId: "netflixgpt-ans",
  storageBucket: "netflixgpt-ans.appspot.com",
  messagingSenderId: "372877769603",
  appId: "1:372877769603:web:c6d54502db0b31253514b6",
  measurementId: "G-1VY04LKMEY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
