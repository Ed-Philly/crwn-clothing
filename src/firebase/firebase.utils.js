import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAUtpWw-G_XoX_G8TSnotNXY3-6csizuQs",
    authDomain: "crwn-db-775e5.firebaseapp.com",
    databaseURL: "https://crwn-db-775e5.firebaseio.com",
    projectId: "crwn-db-775e5",
    storageBucket: "crwn-db-775e5.appspot.com",
    messagingSenderId: "360539250172",
    appId: "1:360539250172:web:c7d406d4e7eeb01ffca679",
    measurementId: "G-CCBLWR4HM8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



