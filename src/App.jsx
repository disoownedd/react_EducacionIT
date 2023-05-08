import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import BorrarUsuario from './components/BorrarUsuario'
import CrearUsuario from './components/CrearUsuario'
import ListadoUsuarios from './components/ListadoUsuarios'
import Navbar from './components/Navbar'
import NoEncontrado from './components/NoEncontrado'

function App() {


  return (
    <div className="container-fluid px-0">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <BrowserRouter>
      
              <Routes>
                <Route path="/" element={<ListadoUsuarios />} />
                
                {/* Borrar usuario */}
                <Route path="/usuarios/:id" element={<BorrarUsuario />} />

                {/* Crear usuario */}
                <Route path="/usuarios/create" element={<CrearUsuario />} />

                {/* Se ingrese una ruta incorrecta */}
                <Route path="*" element={<NoEncontrado />} />
              </Routes>
              
            </BrowserRouter>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
