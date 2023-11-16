import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { login } from '../../services/login'
import useUser from '../../hooks/useUser'

const Login = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const { user, setUser } = useUser()

  const refUserName = useRef(null)
  const passwordRef = useRef(null)

  const navigate = useNavigate()

  useEffect(() => {
    // Valida si ya esta logeado, si lo esta lo manda a la home
    const isAuth = !!user?.accessToken
    if (isAuth) navigate('/')
  }, [navigate, user])

  const signInHandler = (event) => {
    event.preventDefault()

    login({
      username: refUserName.current.value,
      password: password
    }).then((user) => {
      if (user.error) return setMessage(user.error)
      setUser(user)
      navigate('/')
    })
  }

  //CONTROLAR SI ESTA BIEN LA UBICACION DE CODIGO EN QUE SE AGREGÓ
  const handleNavigateToRegister = () => {
    navigate('/registrar')
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={signInHandler}>
        <div className='input-container'>
          <input
            className='input-control'
            placeholder='Nombre de usuario'
            onChange={(event) => {
              setUserName(event.target.value)
            }}
            value={userName}
            ref={refUserName}
          />
        </div>
        <div className='input-container'>
          <input
            className='input-control'
            placeholder='Contraseña'
            type='password'
            onChange={(event) => {
              setPassword(event.target.value)
            }}
            value={password}
            ref={passwordRef}
          />
        </div>
        <button type='submit'>Iniciar sesión</button>
        <button type='button' onClick={handleNavigateToRegister}>
          Registrarse
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}

export default Login