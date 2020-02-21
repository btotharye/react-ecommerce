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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;