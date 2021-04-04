import  firebase  from '@firebase/app';

const firebaseConfig = {
   apiKey: "AIzaSyBBTdcnztOhNI1USbORhpl_-D6rWct3QRc",
    authDomain: "webthaifoundation.firebaseapp.com",
    databaseURL: "https://webthaifoundation.firebaseio.com",
    projectId: "webthaifoundation",
    storageBucket: "webthaifoundation.appspot.com",
    messagingSenderId: "898207599888",
    appId: "1:898207599888:web:def95fc2ce4a8b8bf8e995",
    measurementId: "G-X76SK62QGV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebase;
