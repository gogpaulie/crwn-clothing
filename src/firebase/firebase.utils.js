import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: 'AIzaSyDyww8hyz8NgCi9JTxL8fC52NNnHrCOrV8',
  authDomain: 'crwn-db2-63e5f.firebaseapp.com',
  projectId: 'crwn-db2-63e5f',
  storageBucket: 'crwn-db2-63e5f.appspot.com',
  messagingSenderId: '581101264914',
  appId: '1:581101264914:web:2e81639df1d82b258ef8cb',
  measurementId: 'G-1R49538B72',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;