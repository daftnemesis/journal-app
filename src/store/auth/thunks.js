import { signInWithGoogle } from '../../firebase/providers';
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
