// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: apiKey,
    authDomain: "charusatspace.firebaseapp.com",
    databaseURL: "https://charusatspace-default-rtdb.firebaseio.com",
    projectId: "charusatspace",
    storageBucket: "charusatspace.appspot.com",
    messagingSenderId: "111254952668",
    appId: "1:111254952668:web:265c262a4e9ffca0e4f219",
    measurementId: "G-CRWBW7QM32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);