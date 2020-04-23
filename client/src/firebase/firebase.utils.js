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
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    console.log(userAuth)

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({ displayName, email, createdAt, ...additionalData });

        } catch (error) {
            console.log('error creating user', error.message);

        }
    }

    return userRef;

}
//creates new collections to firebase called collections representing our shop data
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey)
    console.log(collectionRef);

    const batch = firestore.batch();


    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);

    });

    return await batch.commit()

};

firebase.initializeApp(config);

export const convertCollectionsSnapShotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
}
export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    });
}
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;



