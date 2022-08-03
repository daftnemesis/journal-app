
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {
  try {
    const result = await signInWithPopup( FirebaseAuth, googleProvider )
    // const credentials = GoogleAuthProvider.credentialFromResult(result)
    const {displayName, email, photoURL, uid} = result.user;

    return {
      ok: true,
      displayName, email, photoURL, uid
    }
  } catch (error) {
    
    const errorCode = error.code;
    const errorMessage = error.message;

    return {
      ok: false,
      errorMessage,
    }
  }
    
}

export const registerUserWithEmailPassword = async({email, password, displayName}) => {
  try {

    const res = await createUserWithEmailAndPassword(FirebaseAuth, email, password);

    const { uid, photoURL } = res.user;
    
    await updateProfile(FirebaseAuth.currentUser, {displayName})

    //todo: actualizar el displayName en FireBase

    return {
      ok: true,
      uid, photoURL, email, displayName
    }
    
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error)

    return {
      ok: false,
      errorMessage,
    }
  }
    
}

export const loginWithEmailPassword = async({ email, password }) => {

  try {
      const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password );
      const { uid, photoURL, displayName } = resp.user;

      return {
          ok: true,
          uid, photoURL, displayName
      }

  } catch (error) {

    console.log(error)
      return { 
        ok: false, 
        errorMessage : error.message
      }
  }
}