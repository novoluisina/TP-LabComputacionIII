import React from 'react'
import {useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const navigate = useNavigate()

  const handleRegisterClick = () => {
   navigate("/login")
  };

  const handleHomeClick =() =>{
    navigate("/")
  }

  const handleRecipesClick=()=>{
    navigate("/recetas")
  }

  return (
    <nav className='Navbar'>
      <ul>
          <li onClick={handleHomeClick}>Home</li>
          <li onClick={handleRegisterClick}>Registrarse</li>
          <li onClick={handleRecipesClick}>Recetas</li>
          <button>Cerrar sesión</button>
      </ul>
    </nav>
  )
}

export default Navbar
