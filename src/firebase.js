import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAMI5gTHKPgWnRXtjUgNmGGPj-8_0u8tqI",
    authDomain: "crud-4f755.firebaseapp.com",
    projectId: "crud-4f755",
    storageBucket: "crud-4f755.appspot.com",
    messagingSenderId: "139443318917",
    appId: "1:139443318917:web:9115c4be916123b4c339ec"
  };

export const firebaseApp = firebase.initializeApp(firebaseConfig)