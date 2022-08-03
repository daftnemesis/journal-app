import { loginWithEmailPassword, registerUserWithEmailPassword, signInWithGoogle } from '../../firebase/providers';
import {checkingCredentials, logout, login} from './';


export const chechingAuthentication = () => {
  return async(dispatch) => {
    dispatch(checkingCredentials())
  }
}

export const startGoogleSignIn = () => {
  return async(dispatch) => {
    dispatch(checkingCredentials())
    const result = await signInWithGoogle();

    if (!result.ok) return dispatch(logout(result.errorMessage))

    dispatch(login(result))
  }
}
export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
  return async( dispatch ) => {

      dispatch( checkingCredentials() );

      const result = await registerUserWithEmailPassword({ email, password, displayName });
      console.log(result)
      if ( !result.ok ) return dispatch( logout( result.errorMessage ) );

      dispatch( login( result ))

  }

}


export const startLoginWithEmailPassword = ({ email, password }) => {
  return async( dispatch ) => {

      dispatch( checkingCredentials() );

      const result = await loginWithEmailPassword({ email, password });
      console.log(result.errorMessage)

      if ( !result.ok ) return dispatch( logout( result ) );
      dispatch( login( result ));

  }
}
