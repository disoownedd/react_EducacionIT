import { useEffect, useState } from "react"
import Spinkit from "./Spinkit"

const ListadoUsuarios = () => {
  const [usuarios, setUsuarios] = useState([])
  const [cargando, setCargado] = useState(true)
  const [error, setError] = useState(false)

  /* Peticiones asincronica */
  const pedirUsuarios = async () => {

    try {
      const respuesta = await fetch('https://6452bcadbce0b0a0f74ed67a.mockapi.io/usuarios')
      const usuarios = await respuesta.json()
      setUsuarios(usuarios)
      setCargado(false)

    } catch (error) {
      console.error(error)
      setCargado(false)
      setError(true)
    }
  }

  /* Efecto secundario */
  useEffect(() => {
    setCargado(true)
    setError(false)

    pedirUsuarios()

  }, []) /* Quiero que se ejecute una sola vez */

  if (cargando) {
    return <Spinkit />
  }

  if (error) {
    return <p>Error al cargar usuarios.</p>
  }

  return (
    <div className="listado-usuarios">

      <h2 className="mb-4">Listado Usuarios</h2>


      <a href="/usuarios/create" className="btn btn-success">Crear usuarios</a>

      <table className="table mt-4">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Avatar</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, index) => (
            <tr key={index}>
              <th scope="row">{usuario.id}</th>
              <td>{usuario.nombre}</td>
              <td>{usuario.apellido}</td>
              <td>
                <img src={usuario.avatar} alt={usuario.nombre} />
              </td>
              <td>
                <a href={`/usuarios/${usuario.id}`} className="btn btn-danger">Borrar</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


    </div>
  )
}

export default ListadoUsuarios