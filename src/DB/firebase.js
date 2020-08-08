import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './config'

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const now = () => firebase.firestore.FieldValue.serverTimestamp()
export const Timestamp = firebase.firestore.Timestamp