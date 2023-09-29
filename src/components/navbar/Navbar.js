import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  // const navigate = useNavigate()

  // const handleRegisterClick = () => {
  //  navigate("/login")
  // };

  return (
    <nav className='Navbar'>
      {/* <button onClick={handleRegisterClick}>Registrarse</button> */}
      <Link to='/'>Home</Link>
      <Link to='/recetas'>Recetas</Link>
      <Link to='/chefs'>Chefs</Link>
      <button>Cerrar sesión</button>
      {/* los botones tienen que aparecer dependiendo de los permisos */}
    </nav>
  )
}

export default Navbar
