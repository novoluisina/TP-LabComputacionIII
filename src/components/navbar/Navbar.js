import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import AuthContext from '../../context/auth'

const Navbar = () => {
  const { setUser } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleRegisterClick = () => {
    navigate('/registrar')
  }

  const handleLogOut = () => {
    localStorage.removeItem('user')
    setUser({})
    navigate('/login')
  }

  const handleRecipesClick = () => {
    navigate('/recetas')
  }

  return (
    <nav className='Navbar'>
      <ul>
        <button onClick={handleRegisterClick}>Registrarse</button>
        <button onClick={handleRecipesClick}>Recetas</button>
        <button onClick={handleLogOut}>Cerrar sesión</button>
      </ul>
    </nav>
  )
}

export default Navbar
