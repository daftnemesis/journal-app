import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { useSelector, useDispatch } from "react-redux";
import { CheckingAuth } from "../ui/";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth";

export const AppRouter = () => {

  const {status} = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {

    onAuthStateChanged(FirebaseAuth, async(user) => {
      if(!user) return dispatch(logout())
      const {uid, email, photoURL, displayName } = user
      dispatch(login(uid, email, photoURL, displayName))
    })

  }, [])


  if(status === 'checking') {
    return <CheckingAuth />
  }

  return (
    
    // componente AppRouter para hacerce cargo de las rutas de la app
    <Routes>


      {
        (status === 'authenticated') 
          ? <Route path="/*" element={ <JournalRoutes /> } />
          : <Route path='/auth/*' element={ <AuthRoutes /> } />
       
      }

      <Route path="/*" element={<Navigate to='/auth/login' />} />

      {/* Ruta de login y registro */}
      {/* <Route path='/auth/*' element={ <AuthRoutes /> } /> */}

      {/* Ruta principal de la app */}
      {/* <Route path="*" element={ <JournalRoutes /> } /> */}

    </Routes>

  )
}
