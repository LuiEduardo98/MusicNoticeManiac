import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyAK62IlifG013jfZv7wqBbPgh_kUi22TEQ",
    authDomain: "musicmaniac-e068f.firebaseapp.com",
    projectId: "musicmaniac-e068f",
    storageBucket: "musicmaniac-e068f.appspot.com",
    messagingSenderId: "273581911668",
    appId: "1:273581911668:web:9d71e31963e7c9f0f36b21"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)