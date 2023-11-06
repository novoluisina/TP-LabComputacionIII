import React, { useState } from 'react'
import useUser from '../../hooks/useUser'
import { register } from '../../services/register'
import { useNavigate } from 'react-router'
import { login } from '../../services/login'

const NewUser = () => {
  const [userFirstName, setUserFirstName] = useState('')
  const [userLastName, setUserLastName] = useState('')
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [role, setRole] = useState('user')
  const { setUser } = useUser()

  const navigate = useNavigate()

  const crearUsuario = (event) => {
    event.preventDefault()
    const newUser = {
      firstName: userFirstName,
      lastName: userLastName,
      username: userName,
      email: userEmail,
      password: userPassword,
      role: role
    }

    register(newUser).then((user) => {
      if (!user?.id) {
        alert(user.message ? user.message : 'No se pudo registrar el usuario')
        return
      }
      login({
        email: user.email,
        password: user.password
      }).then((user) => {
        setUser(user)
        navigate('/')
      })
    })
  }

  return (
    <form onSubmit={crearUsuario}>
      <h2>Agregar nuevo usuario</h2>
      <div>
        <div>
          <label>Nombre</label>
          <br />
          <input
            value={userFirstName}
            onChange={(event) => setUserFirstName(event.target.value)}
            type='text'
          ></input>
        </div>
        <div>
          <label>Apellido</label>
          <br />
          <input
            value={userLastName}
            onChange={(event) => setUserLastName(event.target.value)}
            type='text'
          ></input>
        </div>
        <div>
          <label>Nombre de usuario</label>
          <br />
          <input
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            type='text'
          ></input>
        </div>
        <div>
          <label>Email</label>
          <br />
          <input
            value={userEmail}
            onChange={(event) => setUserEmail(event.target.value)}
            type='text'
          ></input>
        </div>
        <div>
          <label>Contraseña</label>
          <br />
          <input
            value={userPassword}
            onChange={(event) => setUserPassword(event.target.value)}
            type='text'
          ></input>
        </div>
        <div>
          <label>Soy chef</label>
          <br />
          <input
            type='checkbox'
            value={role}
            onChange={(event) => {
              setRole(event.target.checked ? 'chef' : 'user')
            }}
          ></input>
        </div>
        <div>
          <br />
          <button type='submit'>Crear usuario</button>
        </div>
      </div>
    </form>
  )
}

export default NewUser
