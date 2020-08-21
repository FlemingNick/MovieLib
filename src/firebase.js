import firebase from 'firebase/app'
import 'firebase/firestore'



var firebaseConfig = {
    apiKey: "AIzaSyCgxM6ZIiK7UvNESsxpUaWnDx5qp1RLcmA",
    authDomain: "movielibrary-d9caa.firebaseapp.com",
    databaseURL: "https://movielibrary-d9caa.firebaseio.com",
    projectId: "movielibrary-d9caa",
    storageBucket: "movielibrary-d9caa.appspot.com",
    messagingSenderId: "885902700447",
    appId: "1:885902700447:web:1287fb87079aa8f5d1d7aa",
    measurementId: "G-HRHDM9GRDM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

    export default firebase
