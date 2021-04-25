import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBSbNXV0KFBZJRKLnOVomSl1rBWgTxQ4J4",
    authDomain: "barter-app-f49a6.firebaseapp.com",
    projectId: "barter-app-f49a6",
    storageBucket: "barter-app-f49a6.appspot.com",
    messagingSenderId: "571676246979",
    appId: "1:571676246979:web:21e3f8eccca9009a87b376"
  };
  // Initialize Firebase
  if (!firebase.apps.lenght) {
    firebase.initializeApp(firebaseConfig);
  }
  export default firebase.firestore();