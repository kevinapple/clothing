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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    
    if (!snapShot.exists) {
        const{displayName,email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;