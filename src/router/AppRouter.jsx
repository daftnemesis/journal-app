import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"

export const AppRouter = () => {
  return (
    
    // componente AppRouter para hacerce cargo de las rutas de la app
    <Routes>

      {/* Ruta de login y registro */}
      <Route path='/auth/*' element={ <AuthRoutes /> } />

      {/* Ruta principal de la app */}
      <Route path="*" element={ <JournalRoutes /> } />

    </Routes>

  )
}
