import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCEgmA7Io2orwt1aSeJ3ZYymTLNZ8voJN0",
    authDomain: "cloth-db-2df00.firebaseapp.com",
    databaseURL: "https://cloth-db-2df00.firebaseio.com",
    projectId: "cloth-db-2df00",
    storageBucket: "",
    messagingSenderId: "32864773551",
    appId: "1:32864773551:web:9ae71dfd63acd28239fb5a",
    measurementId: "G-HXLYJRQ7DR"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;