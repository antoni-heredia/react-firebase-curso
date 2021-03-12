import firebase from 'firebase'
import 'firebase/auth'
//TODO complet with the firebase proyect data
const firebaseConfig = {
apiKey: "",
authDomain: "",
projectId: "",
storageBucket: "",
messagingSenderId: "",
appId: "",
measurementId: ""
};
// Initialize Firebase

const fire = firebase.initializeApp(firebaseConfig);
const auth = fire.auth()

export {auth}