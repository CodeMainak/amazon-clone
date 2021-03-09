import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD-hpvexRdTz68I663S7OWR00mhemhxnL4",
    authDomain: "challenge-4f3de.firebaseapp.com",
    databaseURL: "https://challenge-4f3de.firebaseio.com",
    projectId: "challenge-4f3de",
    storageBucket: "challenge-4f3de.appspot.com",
    messagingSenderId: "272934735407",
    appId: "1:272934735407:web:c45d61b77a40c05f1600da",
    measurementId: "G-CDG96VMEG9"
  };
  //Initialize App
const firebaseApp=firebase.initializeApp(firebaseConfig);
//Initialize the database
const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth};

