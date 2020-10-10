// initialize firebase
import firebase from 'firebase';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBtgMeyVTUNuA6Ae2kte6jtR5RlKF9KQBs",
  authDomain: "tuyano-angular-app-d9c46.firebaseapp.com",
  databaseURL: "https://tuyano-angular-app-d9c46.firebaseio.com",
  projectId: "tuyano-angular-app-d9c46",
  storageBucket: "tuyano-angular-app-d9c46.appspot.com",
  messagingSenderId: "362895326088",
  appId: "1:362895326088:web:18e6a94a7bd105f804583d",
  measurementId: "G-9X69J63PMN"
}

firebase.initializeApp(config);

export const db = firebase.firestore();
export const functions = firebase.functions();
export default firebase;
