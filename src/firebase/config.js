
import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBiFVxQGEkpEMgv7TjIEGRnjZBCa3Hw1qg",
    authDomain: "job-protal-a8635.firebaseapp.com",
    projectId: "job-protal-a8635",
    storageBucket: "job-protal-a8635.appspot.com",
    messagingSenderId: "736953929405",
    appId: "1:736953929405:web:b3a7e7b6dbc8a69adbb1d4",
    measurementId: "G-XJWDL4MNJ5"
  };
  
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const firestore = firebaseApp.firestore();
  //const analytics = getAnalytics(app);

  export {firestore, firebase};
 