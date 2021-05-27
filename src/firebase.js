import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDEstKXJ9jpF2W8WSUS4UY3vQbEgSrVUa8",
  authDomain: "react-crud-a802e.firebaseapp.com",
  projectId: "react-crud-a802e",
  storageBucket: "react-crud-a802e.appspot.com",
  messagingSenderId: "1052339682330",
  appId: "1:1052339682330:web:55d5d0ce8fbcb0ea2da5a3"
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();