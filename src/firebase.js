import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCgmIwHau9LDxRpuCFAJifS59S0y-_mJ8Q",
  authDomain: "massenger-clone-68de1.firebaseapp.com",
  projectId: "massenger-clone-68de1",
  storageBucket: "massenger-clone-68de1.appspot.com",
  messagingSenderId: "1010006071063",
  appId: "1:1010006071063:web:83fe15c3a4208751e64952",
  measurementId: "G-TSP6KM07HG"

});


const db = firebaseApp.firestore();

export default db;