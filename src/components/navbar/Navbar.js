import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import '../../pages/styles.css'
import useUser from '../../hooks/useUser'

const Navbar = () => {
  const [isAuth, setIsAuth] = useState(false)
  const { user, setUser, userRole } = useUser()
  const navigate = useNavigate()
  useEffect(() => {
    // Valida si ya esta logeado
    setIsAuth(!!user?.accessToken)
  }, [user])

  const handleHomeClick = () => {
    navigate('/')
  }

  const handleMisRecipesClick = () => {
    navigate('/misrecetas')
  }

  const handleRecipesClick = () => {
    navigate('/recetas')
  }

  // const handleRegisterClick = () => {
  //   navigate('/registrar')
  // }

  const handleLogOut = () => {
    localStorage.removeItem('user')
    setUser({})
    navigate('/login')
  }

  return (
    <nav className='Navbar'>
      <ul>
        {/* <button onClick={handleHomeClick}>Home</button> */}
        {userRole === 'chef' && (
          <button onClick={handleMisRecipesClick} className='button'>
            Mis Recetas
          </button>
        )}
        <button onClick={handleRecipesClick}>Recetas</button>
        {/* {!isAuth && <button onClick={handleRegisterClick}>Registrar</button>} */}
        {isAuth && <button onClick={handleLogOut}>Cerrar sesión</button>}
        {!isAuth && (
          <button
            className='button'
            onClick={() => {
              navigate('/login')
            }}
          >
            Iniciar Sesion
          </button>
        )}
        {userRole === 'superAdmin' && (
          <button
            className='button'
            onClick={() => {
              navigate('/users')
            }}
          >
            Usuarios
          </button>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
