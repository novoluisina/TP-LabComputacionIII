import React from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Bienvenido a RecetAR</h1>
      <p>Encuentra todas tus recetas favoritas en un solo lugar</p>
      <button
        onClick={() => {
          navigate('/recetas')
        }}
      >
        Ver recetas
      </button>
      <button
        onClick={() => {
          navigate('/registrar')
        }}
      >
        Registrarse
      </button>
    </div>
  )
}

export default Home
