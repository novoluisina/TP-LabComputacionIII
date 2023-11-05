import { useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom';


const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [token, setToken] = useState('')

  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const navigate = useNavigate()

  const emailChangeHandler = (event) => {
    if (emailRef.current.value.length > 0) {
      emailRef.current.style.borderColor = ''
      emailRef.current.style.outline = ''
    }
    setEmail(event.target.value)
  }

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value)
  }
  const signInHandler = (event) => {
    // console.log({ emailRef: emailRef.current.value, password })
    console.log(event)
    event.preventDefault()

    fetch('http://localhost:8000/login', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        password: password
      })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        // setToken(data.accessToken)
        if (data.accessToken) {
          onLogin()
          navigate('/recetas')
        }
      })
      .catch((err) => alert(err))

    // if (emailRef.current.value.length === 0) {
    //   emailRef.current.focus()
    //   emailRef.current.style.borderColor = 'red'
    //   emailRef.current.style.outline = 'none'
    //   alert('Email vacío!')
    //   return
    // }

    // if (password.length === 0) {
    //   passwordRef.current.focus()
    //   passwordRef.current.style.borderColor = 'red'
    //   passwordRef.current.style.outline = 'none'
    //   alert('Password vacío')
    //   return
    // }
    // alert(`Su email es: ${email} y su password es: ${password}`)

    // onLogin()
    // console.log({ token })
    // navigate('/recetas')
  }

  //CONTROLAR SI ESTA BIEN LA UBICACION DE CODIGO EN QUE SE AGREGÓ
  const handleNavigateToNewUser = () => {
    navigate('/newuser'); 
  };

  return (
    <div>
      <div className='login-container'>
        <div className='login-box'>
          <h4>Registrarse</h4>
          <div className='input-container'>
            <input
              className='input-control'
              placeholder='Email'
              type='email'
              onChange={emailChangeHandler}
              value={email}
              ref={emailRef}
            />
          </div>
          <div className='input-container'>
            <input
              className='input-control'
              placeholder='Contraseña'
              type='password'
              onChange={passwordChangeHandler}
              value={password}
              ref={passwordRef}
            />
          </div>
          <button
            onClick={signInHandler}
            className='signin-button'
            type='button'
          >
            Iniciar sesión
          </button>
          <div>
            <button type="button" onClick={handleNavigateToNewUser}>
              Agregar Nuevo Usuario
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
