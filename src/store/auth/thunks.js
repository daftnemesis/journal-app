import { registerUserWithEmailPassword, signInWithGoogle } from '../../firebase/providers';
import {chechingCredentials, logout, login} from './';


export const chechingAuthentication = () => {
  return async(dispatch) => {
    dispatch(chechingCredentials())
  }
}

export const startGoogleSignIn = () => {
  return async(dispatch) => {
    dispatch(chechingCredentials())
    const result = await signInWithGoogle();

    if (!result.ok) return dispatch(logout(result.errorMessage))

    dispatch(login(result))
  }
}

export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {
  return async(dispatch) => {
    dispatch(chechingCredentials());

    const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword({email, password, displayName});

    if(!ok) return dispatch(logout(errorMessage));

    dispatch(login({uid, photoURL, email, displayName}))

  }
}
