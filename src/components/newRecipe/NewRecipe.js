import React, { useState } from 'react'

const NewRecipe = () => {
  const [recipeName, setRecipeName] = useState('')
  const [recipeTime, setRecipeTime] = useState('')
  const [recipeAsset, setRecipeAsset] = useState('')

  const createRecipe = (event) => {
    event.preventDefault()
    fetch('http://localhost:8000/recipes', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJBZG1pbmlzdHJhdG9yICIsImF2YXRhciI6Imh0dHBzOi8vcm9ib2hhc2gub3JnL2VhcXVlcXVhc2luY2lkdW50LnBuZz9zaXplPTUweDUwJnNldD1zZXQxIiwiaWF0IjoxNjk4NTIwNzM2LCJleHAiOjE2OTg1MjE2MzZ9.Ys8Vu5Nc7A_zFhrHs2x6UxOoO328O6BSyuNp1kOdQu4'
      },
      body: JSON.stringify({
        title: recipeName,
        time: recipeTime,
        asset: recipeAsset
          ? recipeAsset
          : 'https://assets.elgourmet.com/wp-content/uploads/2023/09/shutterstock_1803865330-e1695920586800-1024x556.jpg.webp'
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
    <form onSubmit={createRecipe}>
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
