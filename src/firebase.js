import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAnWqN8skfLvMfi0N2s2-reNUvdHE6gtXw",
  authDomain: "twitter-clone-f5388.firebaseapp.com",
  projectId: "twitter-clone-f5388",
  storageBucket: "twitter-clone-f5388.appspot.com",
  messagingSenderId: "285917171564",
  appId: "1:285917171564:web:cb0b528666afba9507ad49"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;