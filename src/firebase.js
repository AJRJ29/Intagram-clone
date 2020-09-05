import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBTNCaMm_LKrp58kE4bAatQp8n4xYKuNLA",
  authDomain: "instagram-clone-8a028.firebaseapp.com",
  databaseURL: "https://instagram-clone-8a028.firebaseio.com",
  projectId: "instagram-clone-8a028",
  storageBucket: "instagram-clone-8a028.appspot.com",
  messagingSenderId: "109044162154",
  appId: "1:109044162154:web:d867926f1ddb1fb9dcf413",
  measurementId: "G-91ZSSND4H9"
});

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export { db, auth, storage }
export default db
