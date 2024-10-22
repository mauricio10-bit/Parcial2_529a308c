import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Cabecera } from './app/Componentes/Cabecera'
import { Ruteo } from './app/Rutas/Ruteo'

function App() {

  return (
    <>
      <div className='container-fluid' style={{fontFamily: 'consolas'}}>
        <BrowserRouter>
          <Cabecera />

          <Ruteo />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
