import React, { useState } from 'react'

const NewUser = () => {
  const [userFirstName, setUserFirstName] = useState('')
  const [userLastName, setUserLastName] = useState('')
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const crearUsuario = (event) => {
    event.preventDefault()
    fetch('http://localhost:8000/users', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJBZG1pbmlzdHJhdG9yICIsImF2YXRhciI6Imh0dHBzOi8vcm9ib2hhc2gub3JnL2VhcXVlcXVhc2luY2lkdW50LnBuZz9zaXplPTUweDUwJnNldD1zZXQxIiwiaWF0IjoxNjk4NTIwNzM2LCJleHAiOjE2OTg1MjE2MzZ9.Ys8Vu5Nc7A_zFhrHs2x6UxOoO328O6BSyuNp1kOdQu4'
      },
      body: JSON.stringify({ 
        firstName: userFirstName,
        lastName: userLastName,
        username: userName,
        email: userEmail,
        password: userPassword,
      })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Usuario creado')
        console.log(data)
      })
      .catch((err) => console.error(err))
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
          <br />
          <button type='submit'>Crear usuario</button>
        </div>
      </div>
    </form>
  )
}

export default NewUser