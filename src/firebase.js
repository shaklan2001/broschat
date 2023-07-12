import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBmYraUo2FRs4_nb4B1gFR5dTJlshfRw7E",
    authDomain: "unichat-76ef7.firebaseapp.com",
    projectId: "unichat-76ef7",
    storageBucket: "unichat-76ef7.appspot.com",
    messagingSenderId: "823048452187",
    appId: "1:823048452187:web:064e46cfdc1cd563e4277e"
}).auth();

