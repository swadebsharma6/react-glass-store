// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDC9jw0U40iV1wlyaMEza7dsRsmk-bMQ8I",
  authDomain: "react-glasses-authentica-ac64e.firebaseapp.com",
  projectId: "react-glasses-authentica-ac64e",
  storageBucket: "react-glasses-authentica-ac64e.appspot.com",
  messagingSenderId: "669945754005",
  appId: "1:669945754005:web:a55cb41d6771900a01069c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;