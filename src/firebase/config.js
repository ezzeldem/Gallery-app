import  * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {

  apiKey: "AIzaSyCS7cmhj-mFRQtMg_zo48EA6qo73k17aCg",

  authDomain: "ezz-firegram.firebaseapp.com",

  projectId: "ezz-firegram",

  storageBucket: "ezz-firegram.appspot.com",

  messagingSenderId: "174670368364",

  appId: "1:174670368364:web:bcd3731fe4dc6961121249"

};


// Initialize Firebase

firebase.initializeApp(firebaseConfig);


const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };