import { useNavigate } from "react-router-dom"
import { useForm } from "../hooks/useForm"

const CrearUsuario = () => {

  const navigate = useNavigate()
  const [usuario, handleInputChange] = useForm({
    nombre: '',
    apellido: '',
    avatar: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(usuario)

    fetch('https://6452bcadbce0b0a0f74ed67a.mockapi.io/usuarios', {
      method: 'POST',
      headers: { 'Content-type': 'application/json'},
      body: JSON.stringify(usuario) // convertir un obj de JS a un string
    }).then(() => {
      navigate('/')
    }).catch(err => {
      console.error(err)
    })

  }

  const { nombre, apellido, avatar } = usuario

  return (
    <div className="crear-usuario">
      <div className="mt-4">
        <a href="" className="btn btn-info">Volver al listado</a>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={handleInputChange}
            placeholder="Escriba su nombre" />
        </div>
        <div className="mb-3">
          <label htmlFor="apellido" className="form-label">Apellido</label>
          <input
            type="text"
            className="form-control"
            id="apellido"
            name="apellido"
            value={apellido}
            onChange={handleInputChange}
            placeholder="Escriba su apellido" />
        </div>

        <div className="mb-3">
          <label htmlFor="avatar" className="form-label">Avatar</label>
          <input
            type="text"
            className="form-control"
            id="avatar"
            name="avatar"
            value={avatar}
            onChange={handleInputChange}
            placeholder="Escriba su avatar" />
        </div>

        <button className="btn btn-success">Crear usuario</button>
      </form>
    </div>
  )
}

export default CrearUsuario