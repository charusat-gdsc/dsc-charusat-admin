import firebase from 'firebase/app';
import 'firebase/auth';   
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyAA08PlxHu3DCZqn6OGjh2ysAozRe9XOtY",
  authDomain: "dsc-charusat.firebaseapp.com",
  databaseURL: "https://dsc-charusat.firebaseio.com",
  projectId: "dsc-charusat",
  storageBucket: "dsc-charusat.appspot.com",
  messagingSenderId: "767919857845",
  appId: "1:767919857845:web:cb6a285e933e2b6375defc",
  measurementId: "G-KE6QK968T2"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().enablePersistence({synchronizeTabs:!0}).catch(()=>{console.warn("DB offline support not available")})
export default{
  notificationSupported:firebase.messaging.isSupported(),
  messaging: (firebase.messaging.isSupported())?firebase.messaging():null,
  firestore:firebase.firestore(),
  auth:firebase.auth(),
  storage:firebase.storage(),
};