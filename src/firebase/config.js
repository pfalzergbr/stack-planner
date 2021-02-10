import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBVnK-zhXXDfQbeMXmnMHR-gZ2_Hs_0QCU',
  authDomain: 'stack-planner.firebaseapp.com',
  projectId: 'stack-planner',
  storageBucket: 'stack-planner.appspot.com',
  messagingSenderId: '860476817347',
  appId: '1:860476817347:web:a728f025476d0d42844776',
};

firebase.initializeApp(firebaseConfig);


export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const google = new firebase.auth.GoogleAuthProvider()
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;

