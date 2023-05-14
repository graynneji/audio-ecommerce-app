import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCb-3kpM-1XhK1UQgxBQiOce6Ixqf15hmQ",
  authDomain: "audio-ecommerce-7e005.firebaseapp.com",
  projectId: "audio-ecommerce-7e005",
  storageBucket: "audio-ecommerce-7e005.appspot.com",
  messagingSenderId: "755537707448",
  appId: "1:755537707448:web:a35adf9d8bb20053ea0f4d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//sign in with google popup
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...(additionalInformation = {}),
      });
    } catch (error) {
      console.log("Error creating a user", error.message);
    }
  }
  return userDocRef;
};

//create user and password
export const createAuthUserWithEmailAndPassword = async (
  email,
  password,
  displayName
) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(
    auth,
    email,
    password,
    displayName
  );
};

//sign in with email and password
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
//signout
export const signOutUser = async () => signOut(auth);

//Observable Listener
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

//
