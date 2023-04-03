// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPoi6zRrq0VLzZN4mRO3uJfSlG1lBOELc",
  authDomain: "formstep-f8b04.firebaseapp.com",
  projectId: "formstep-f8b04",
  storageBucket: "formstep-f8b04.appspot.com",
  messagingSenderId: "466203815939",
  appId: "1:466203815939:web:f24ab839f9dc9f2baede36",
  measurementId: "G-YB1GGG8J35",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
