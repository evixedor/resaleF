import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBwZCtCCIIE0dAbs1Rb1lmG2-xwJred6_o",

	authDomain: "resale-fortuune.firebaseapp.com",

	projectId: "resale-fortuune",

	storageBucket: "resale-fortuune.appspot.com",

	messagingSenderId: "972482735268",

	appId: "1:972482735268:web:b85a1ce77c086e5a1f4a31",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore(); // creating the database

export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, "users", userAuth.uid); // creating a userInstance inside of firestore

	const userSnapShot = await getDoc(userDocRef); // creating a dataReference from the documentInstance - userInstance

	// checking if a document exists by verifying the dataReferance
	if (!userSnapShot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, { displayName, email, createdAt });
		} catch (error) {
      console.log('error creating the user', error.message);
    }
	}

  return userDocRef;
};
