import { useEffect } from "react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Spinkit from "./Spinkit"

const BorrarUsuario = () => {

  const [usuario, setUsuario] = useState({})
  const [error, setError] = useState(false)
  const [cargando, setCargando] = useState(true)
  const { id } = useParams()
  const navigate = useNavigate()
  console.log(id)

  useEffect(() => {
    fetch(`https://6452bcadbce0b0a0f74ed67a.mockapi.io/usuarios/${id}`)
      .then(respuesta => respuesta.json())
      .then(usuario => {
        setCargando(false)
        setUsuario(usuario)
      })
      .catch(err => {
        setCargando(false)
        setError(true)
        console.log(err)
      })
  }, [id])

  const handleDelete = () => {
    fetch(`https://6452bcadbce0b0a0f74ed67a.mockapi.io/usuarios/${id}`, {
      method: 'DELETE'
    }).then(() => {
      navigate('/')
    }).catch(err => {
      console.error(err)
    })
  }
  
  if (cargando) {
    return <Spinkit />
  }

  if (error) {
    return <p>Error al cargar usuarios.</p>
  }

  return (
    <div className="borrar-usuario">
      <h2>Borrar Usuario</h2>
      <hr />

      <h3>¿Está seguro que desea borrar el usuario?</h3>

      <div className="card" style={{width: '300px'}}>
        <img src={usuario.avatar} className="card-img-top" alt={usuario.nombre} />
          <div className="card-body">
            <h5 className="card-title">{usuario.nombre} - {usuario.id}</h5>
            <button className="btn btn-danger" onClick={handleDelete} >Si, borraló...</button>
          </div>
      </div>

    </div>
  )
}

export default BorrarUsuario