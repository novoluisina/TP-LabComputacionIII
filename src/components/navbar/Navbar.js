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
          <button onClick={handleRegisterClick}>Iniciar sesión</button>
          <button onClick={handleRecipesClick}>Recetas</button>
          <button onClick={handleHomeClick}>Cerrar sesión</button>
      </ul>
    </nav>
  )
}

export default Navbar
