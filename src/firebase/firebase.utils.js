import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD8ZLmYcTzY3b8mplKleeG587xQCue07jU",
  authDomain: "react-ecommerce-13ea1.firebaseapp.com",
  databaseURL: "https://react-ecommerce-13ea1.firebaseio.com",
  projectId: "react-ecommerce-13ea1",
  storageBucket: "react-ecommerce-13ea1.appspot.com",
  messagingSenderId: "231061531378",
  appId: "1:231061531378:web:f86e620170802afdd0be6b",
  measurementId: "G-36L15JRV6D"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
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