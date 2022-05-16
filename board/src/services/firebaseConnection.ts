import firebase from 'firebase/app';
import 'firebase/firestore';

let firebaseConfig = {
    apiKey: "AIzaSyAxAIv-7HTpWDwWbrvn8WvFP9FepH66lu8",
    authDomain: "boardapp-2040d.firebaseapp.com",
    projectId: "boardapp-2040d",
    storageBucket: "boardapp-2040d.appspot.com",
    messagingSenderId: "52568815395",
    appId: "1:52568815395:web:e010ed0a3761caf243be96"
};
// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
