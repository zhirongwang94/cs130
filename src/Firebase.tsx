import firebase from "firebase"
var firebaseConfig = {
    apiKey: "AIzaSyC2rOQ72ut-xL20Hl2NJfyAv4xHK374YRM",
    authDomain: "covidaway-55b86.firebaseapp.com",
    databaseURL: "https://covidaway-55b86.firebaseio.com",
    projectId: "covidaway-55b86",
    storageBucket: "covidaway-55b86.appspot.com",
    messagingSenderId: "819026874031",
    appId: "1:819026874031:web:b424a25eb21f3d121dce5a",
    measurementId: "G-NN77SPJFBF"
  };

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase