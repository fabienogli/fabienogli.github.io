import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
var config = {
    apiKey: "AIzaSyBtVpGC3h-HdjURZxoTEmK1YuoYhmXo1jI",
    authDomain: "portfolio-api-4adeb.firebaseapp.com",
    databaseURL: "https://portfolio-api-4adeb.firebaseio.com",
    projectId: "portfolio-api-4adeb",
    storageBucket: "portfolio-api-4adeb.appspot.com",
    messagingSenderId: "735924745715"
};
firebase.initializeApp(config)

// firebase utils
var database = firebase.database();
