// /* Visit https://firebase.google.com/docs/database/security to learn more about security rules. */

// Import the functions you need from the SDKs you need
// import firebase, { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //   projectId: process.env.REACT_APP_PROJECT_ID,
  //   apiKey: process.env.REACT_APP_API_KEY,
  //   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  //   databaseURL: process.env.REACT_APP_DB_URL,
  //   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  //   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  //   appId: process.env.REACT_APP_APP_ID,
  apiKey: "AIzaSyBx-j9Gd-tK1OTLSTlLWRLvXjWxT2--UK4",
  authDomain: "redux-toolkit-firebase-todo.firebaseapp.com",
  databaseURL:
    "https://redux-toolkit-firebase-todo-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "redux-toolkit-firebase-todo",
  storageBucket: "redux-toolkit-firebase-todo.appspot.com",
  messagingSenderId: "669086736840",
  appId: "1:669086736840:web:57d5c3f2bdeac9ea1620fd",
};
// console.log(process.env.REACT_APP_API_KEY);
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);

// export default app;

export const db = firebase.database();
// app();
