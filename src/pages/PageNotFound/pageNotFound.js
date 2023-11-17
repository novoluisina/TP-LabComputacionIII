import React from 'react'
import { useNavigate } from 'react-router'

const PageNotFound = () => {
  const navigate = useNavigate()

  const backMainPageHandler = () => {
    navigate('/')
  }
  return (
    <div>
      <h2>La pagina solicitada no fue encontrada</h2>
      <button onClick={backMainPageHandler}>Volver a recetas</button>
    </div>
  )
}

export default PageNotFound
