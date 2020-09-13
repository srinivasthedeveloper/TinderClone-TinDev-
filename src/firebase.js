import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCWHq89KkY46QlUwglxj6GmxvBPZ9ANJdM",
  authDomain: "tinderclone-ea412.firebaseapp.com",
  databaseURL: "https://tinderclone-ea412.firebaseio.com",
  projectId: "tinderclone-ea412",
  storageBucket: "tinderclone-ea412.appspot.com",
  messagingSenderId: "540142086099",
  appId: "1:540142086099:web:52c8aab06d20b998543126",
  measurementId: "G-R0NDFCSVS5",
};

const firebaseApp=firebase.initializeApp(firebaseConfig);

const database= firebaseApp.firestore();

export default database;