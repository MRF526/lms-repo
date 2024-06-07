// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxlVHpwrlcUPwTOpp2iX6Zor3sizBC0AY",
  authDomain: "lmsapp-535da.firebaseapp.com",
  projectId: "lmsapp-535da",
  storageBucket: "lmsapp-535da.appspot.com",
  messagingSenderId: "85532793411",
  appId: "1:85532793411:web:be679ee7ad23eba03212f6",
  measurementId: "G-BC6QND1YRK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;