import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { JournalApp } from './JournalApp'
import { store } from './store'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  {/* el provider del store debe de estar en el punto mas alto de nuestra aplicacion para que todos los
  componentes que lo requieran puedan acceder a el */}
    <Provider store={store} >
      <React.StrictMode>
        <JournalApp />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
)
