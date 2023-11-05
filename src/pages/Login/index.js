import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { login } from '../../services/login'
import useUser from '../../hooks/useUser'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const { user, setUser } = useUser()

  const emailRef = useRef(null)
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
      email: emailRef.current.value,
      password: password
    }).then((user) => {
      if (user.error) return setMessage(user.error)
      setUser(user)
      navigate('/')
    })
  }

  //CONTROLAR SI ESTA BIEN LA UBICACION DE CODIGO EN QUE SE AGREGÓ
  const handleNavigateToNewUser = () => {
    navigate('/newuser')
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={signInHandler}>
        <div className='input-container'>
          <input
            className='input-control'
            placeholder='Email'
            // type='email'
            onChange={(event) => {
              setEmail(event.target.value)
            }}
            value={email}
            ref={emailRef}
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
        <button type='button' onClick={handleNavigateToNewUser}>
          Agregar Nuevo Usuario
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}

export default Login
