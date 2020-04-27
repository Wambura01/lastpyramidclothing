import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyD7uHeJ7JE4Tit1krNRI7aTHSGSUo82Eps',
	authDomain: 'lastpyramid-db.firebaseapp.com',
	databaseURL: 'https://lastpyramid-db.firebaseio.com',
	projectId: 'lastpyramid-db',
	storageBucket: 'lastpyramid-db.appspot.com',
	messagingSenderId: '106302690967',
	appId: '1:106302690967:web:58d0ddf3f8b0dc8402fbd2',
	measurementId: 'G-LTPMHNC9BG',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createAt,
				...additionalData,
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
