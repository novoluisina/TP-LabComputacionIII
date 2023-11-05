import React, { useState } from 'react'

const NewRecipe = () => {
  const [recipeName, setRecipeName] = useState('')
  const [recipeTime, setRecipeTime] = useState('')
  const [recipeAsset, setRecipeAsset] = useState('')

  const crearReceta = (event) => {
    event.preventDefault()
    fetch('http://localhost:8000/recipes', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjYsIm5hbWUiOiJBZG1pbmlzdHJhdG9yICIsImF2YXRhciI6Imh0dHBzOi8vcm9ib2hhc2gub3JnL2VhcXVlcXVhc2luY2lkdW50LnBuZz9zaXplPTUweDUwJnNldD1zZXQxIiwiaWF0IjoxNjk4NTIxNjM0LCJleHAiOjE2OTg1MjI1MzR9.Jq2bsSLTSUngrXp0z8b55lh4Ms0qEwEpNyQSTDs4BhA'
      },
      body: JSON.stringify({
        title: recipeName,
        time: recipeTime,
        asset: recipeAsset
          ? recipeAsset
          : 'http://alicante.com.ar/uploads/recetas/2664_receta.jpg'
      })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Receta creada')
        console.log(data)
      })
      .catch((err) => console.error(err))
  }

  return (
    <form onSubmit={crearReceta}>
      <h2>Agregar nueva receta</h2>
      <div>
        <div>
          <label>Nombre</label>
          <br />
          <input
            value={recipeName}
            onChange={(event) => setRecipeName(event.target.value)}
            type='text'
          ></input>
        </div>
        <div>
          <label>Tiempo de coccion</label>
          <br />
          <input
            value={recipeTime}
            onChange={(event) => setRecipeTime(event.target.value)}
            type='text'
          ></input>
        </div>
        <div>
          <br />
          <button type='submit'>Agregar receta</button>
        </div>
      </div>
    </form>
  )
}

export default NewRecipe
