
import firebase from 'firebase/app'
import 'firebase/firestore' 
import 'firebase/auth'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBkkSnQuKoKIeU73G1kqeUakZXs7q9QEbs",
    authDomain: "ksplan.firebaseapp.com",
    databaseURL: "https://ksplan.firebaseio.com",
    projectId: "ksplan",
    storageBucket: "ksplan.appspot.com",
    messagingSenderId: "582399977169"
  };


  firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots:true})

export default firebase