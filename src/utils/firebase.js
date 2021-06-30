import firebase from 'firebase/app'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAAJWbRrh93z9c0kBWiMOCVwl6MiW0x5lE",
    authDomain: "chore-fb.firebaseapp.com",
    projectId: "chore-fb",
    storageBucket: "chore-fb.appspot.com",
    messagingSenderId: "428238425239",
    appId: "1:428238425239:web:667a7f4cbadd6a08d86dd2"
  };

  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage()

  export {
      storage, firebase as default
  }