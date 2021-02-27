import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyCXEnt7u5lOtUM5r4ZSvtJQyGBJbnm8O3E",
    authDomain: "myapp-652cb.firebaseapp.com",
    projectId: "myapp-652cb",
    storageBucket: "myapp-652cb.appspot.com",
    messagingSenderId: "773065593829",
    appId: "1:773065593829:web:e6020fd4238f37e444150c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore ();