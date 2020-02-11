import firebase from "firebase";

const config = {
  /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyDEsL6stJ4-PQ2LV-rzvzWFGHHxmhSqVDs",
  authDomain: "pakistan-olx-1.firebaseapp.com",
  databaseURL: "https://pakistan-olx-1.firebaseio.com",
  projectId: "pakistan-olx-1",
  storageBucket: "pakistan-olx-1.appspot.com",
  messagingSenderId: "719427536807",
  appId: "1:719427536807:web:b01879d69a325b7da91882"
};
const firebaseAuth = firebase.initializeApp(config);
export default firebaseAuth;
