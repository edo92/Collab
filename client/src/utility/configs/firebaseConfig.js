import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = firebase.initializeApp({
        apiKey: "AIzaSyD95GvTlNXNL9QCkaOcVe2DffkVVZc5RVw",
        authDomain: "aff-store.firebaseapp.com",
        databaseURL: "https://aff-store.firebaseio.com",
        projectId: "aff-store",
        storageBucket: "aff-store.appspot.com",
        messagingSenderId: "385265018716",
        appId: "1:385265018716:web:a3128a2cca966c7d"
});

export default firebaseConfig;
