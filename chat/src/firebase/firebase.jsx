// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCEiHASj5lT7pDJRdyusVTLjpCPunaOcQ",
  authDomain: "logious-final-project.firebaseapp.com",
  projectId: "logious-final-project",
  storageBucket: "logious-final-project.appspot.com",
  messagingSenderId: "1001609531915",
  appId: "1:1001609531915:web:23d5e705bdee2ae307ed0e",
  measurementId: "G-B1T9QPT2P7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export { app, auth};