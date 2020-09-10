import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAjutZb5WMYNjbGEvfJDwVaSOzEgpmvfVk",
    authDomain: "facebook-messenger-clone-87200.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-87200.firebaseio.com",
    projectId: "facebook-messenger-clone-87200",
    storageBucket: "facebook-messenger-clone-87200.appspot.com",
    messagingSenderId: "241936534004",
    appId: "1:241936534004:web:508c0419153693b66e11a1",
    measurementId: "G-0XW5WKTW5S"
});

const db = firebaseApp.firestore();

export default db;
