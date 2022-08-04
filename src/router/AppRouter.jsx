import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { CheckingAuth } from "../ui/";
import { useCheckAuth } from "../hooks";

export const AppRouter = () => {

  const {status} = useCheckAuth()


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
