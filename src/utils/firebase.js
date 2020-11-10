import firebase from 'firebase/app'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCg8N304gWZzvkRF_g-un0w2m6UTJvhdVY",
    authDomain: "chore-images.firebaseapp.com",
    databaseURL: "https://chore-images.firebaseio.com",
    projectId: "chore-images",
    storageBucket: "chore-images.appspot.com",
    messagingSenderId: "1067777407839",
    appId: "1:1067777407839:web:e1c47cfd322f1c35d294ea",
    measurementId: "G-BLTRZG0Z72"
  };

  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage()

  export {
      storage, firebase as default
  }