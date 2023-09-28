import React from 'react'
// import { useNavigate } from "react-router";

const Navbar = () => {

  // const navigate =useNavigate();

  // const handleRegisterClick = () => {
  //  navigate("/login")
  // };

  return (
    <nav>
        {/* <button onClick={handleRegisterClick}>Registrarse</button> */}
        <button>Agregar recetas</button>
        <button>Ver recetas</button>
        <button>Cerrar sesión</button>
        {/* los botones tienen que aparecer dependiendo de los permisos */}
    </nav>
  )
}

export default Navbar