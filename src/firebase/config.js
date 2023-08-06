import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB6vavkV-rMj6uMRWdRjx0bFexF6zfnfyE",
    authDomain: "mymoney-kate.firebaseapp.com",
    projectId: "mymoney-kate",
    storageBucket: "mymoney-kate.appspot.com",
    messagingSenderId: "1034354824976",
    appId: "1:1034354824976:web:0af4157f3ef770f4ef3795"
  }

  // init firebase

  firebase.initializeApp(firebaseConfig)

// init services

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//timestamp

const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }