import * as firebase from "firebase/app";
import "firebase/auth";
// import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyB4OG1xEw8ZycNXqhyPrw7hrJpOye6D0Ik",
    authDomain: "cards-allotrope.firebaseapp.com",
    databaseURL: "https://cards-allotrope.firebaseio.com",
    projectId: "cards-allotrope",
    storageBucket: "cards-allotrope.appspot.com",
    messagingSenderId: "1088573505479",
    appId: "1:1088573505479:web:430f4a177334c17082a3e2",
    measurementId: "G-6HGHG5LY1D"
};

try {
    firebase.initializeApp(firebaseConfig);
} catch (err) {
    console.log('Firebase already initialized.')
}

export default (req, res) => {
    const { action } = req.query;
    switch(action) {
        // Registering
        case 'register':
            res.status(200).json({'response': 'success'});
        // Sign-in

        // Sign-out
        
        // Forgot password

        // Change password

        default:
            res.status(404).json({'response': 'fail'});
    }
};

function registration(req, res) {

};