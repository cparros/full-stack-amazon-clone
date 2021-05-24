import firebase from 'firebase'

// code snipet received from firebase project settings, general tab, under config sdk setup
const firebaseConfig = {
  apiKey: "AIzaSyALtnX83DkUsP7cBoqL8XWAZJD_WSwX5Ao",
  authDomain: "clone-challenge-cd675.firebaseapp.com",
  projectId: "clone-challenge-cd675",
  storageBucket: "clone-challenge-cd675.appspot.com",
  messagingSenderId: "826440329364",
  appId: "1:826440329364:web:622306b65218ce19b7ac81"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }