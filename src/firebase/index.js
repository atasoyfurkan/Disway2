import firebase from "firebase/app";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBeYm32SOp4AufV_tgq9wPmuI8BTiBgN6k",
  authDomain: "refern-7c476.firebaseapp.com",
  databaseURL: "https://refern-7c476.firebaseio.com",
  projectId: "refern-7c476",
  storageBucket: "refern-7c476.appspot.com",
  messagingSenderId: "1086945341086",
  appId: "1:1086945341086:web:d77fee9ae2d3f496"
};
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
