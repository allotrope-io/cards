import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { User } from 'firebase';

if (!firebase.apps.length) {
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
    firebase.initializeApp(firebaseConfig);
}

// Google Auth
const googleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider);
}

// Github Auth 
const githubProvider = new firebase.auth.GithubAuthProvider();
export const signInWithGithub = () => {
    auth.signInWithPopup(githubProvider);
}

// Auth
export const auth = firebase.app().auth();

// Firestore
export const firestore = firebase.app().firestore();

export const generateUserDocument = async (user: User, additionalData?) => {
    if (!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
        const {email, displayName, photoURL} = user;
        try {
            await userRef.set({
                displayName,
                email,
                photoURL,
                ...additionalData
            });
        } catch (error) {
            console.error("Error creating user document", error);
        }
    }
    return getUserDocument(user.uid);
}

const getUserDocument = async (uid: string) => {
    if (!uid) return null;
    try {
        const userDocument = await firestore.doc(`users/${uid}`).get();
        return {
            uid,
            ...userDocument.data()
        };
    } catch (error) {
        console.error("Error fetching user", error);
    }
}
