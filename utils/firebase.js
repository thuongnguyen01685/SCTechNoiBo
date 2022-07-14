// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4zQB4FgKuNMUG_hJv6EdSdHyH4t3Cb2A",
  authDomain: "sc-tech-c1b0f.firebaseapp.com",
  projectId: "sc-tech-c1b0f",
  storageBucket: "sc-tech-c1b0f.appspot.com",
  messagingSenderId: "1003238767497",
  appId: "1:1003238767497:web:b2da51d4fa955961597f58",
  measurementId: "G-YRJFVXXM6X",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
let app;
if (firebase.app.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.auth();
}

export { auth };
