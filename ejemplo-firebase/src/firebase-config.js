import firebase from 'firebase/app'
import 'firebase/firestore'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyDoVk4xAWxlW0QdUaTe2D0uNEFD47QdqNo",
authDomain: "curso-react-firebase-dfc19.firebaseapp.com",
projectId: "curso-react-firebase-dfc19",
storageBucket: "curso-react-firebase-dfc19.appspot.com",
messagingSenderId: "653368752256",
appId: "1:653368752256:web:65b754bfee8b43932e0e65",
measurementId: "G-QJ9RLY41BE"
};
// Initialize Firebase

const fire = firebase.initializeApp(firebaseConfig);
const firestore_db = fire.firestore()

export {firestore_db}