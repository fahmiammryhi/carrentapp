//database 
//import * as firebase from 'firebase';
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBqgZCtLz9O_YlsfG5B67DBYB-XALEDHWI",
  authDomain: "tubesppb2.firebaseapp.com",
  projectId: "tubesppb2",
  storageBucket: "tubesppb2.appspot.com",
  messagingSenderId: "46558387454",
  appId: "1:46558387454:web:6c64c42ff660d5a1ed99af",
  measurementId: "G-MS238D70V5"
};
firebase.initializeApp(firebaseConfig);
export default firebase;
  