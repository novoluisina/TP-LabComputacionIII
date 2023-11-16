import React, { useState } from 'react'
import { postRecipes } from '../../services/recipes'
import useUser from '../../hooks/useUser'

const NewRecipe = ({ setRecipes, setShowFom }) => {
  const [recipeName, setRecipeName] = useState('')
  const [recipeTime, setRecipeTime] = useState('')
  const [recipeAsset, setRecipeAsset] = useState('')
  const [recipeSteps, setRecipeSteps] = useState('')
  const { user } = useUser()

  const createRecipe = (event) => {
    event.preventDefault()
    const newRecipe = {
      title: recipeName,
      time: recipeTime,
      asset: recipeAsset
        ? recipeAsset
        : 'http://alicante.com.ar/uploads/recetas/2664_receta.jpg',
      userId: user.id,
      steps: recipeSteps
    }

    postRecipes(user.accessToken, newRecipe).then((insertRecipe) => {
      // if (insertRecipe?.accessToken) {
      //   // Si vuelve un AccessToken es porque el que se envio estaba vencido, asi que se actualiza
      //   // Se deberia generalizar este comportamiento para todos los servicios
      //   setUser((prevUser) => {
      //     prevUser.accessToken = insertRecipe.accessToken
      //     return prevUser
      //   })
      // }
      if (insertRecipe?.id) {
        setRecipes((prevRecipes) => {
          const newList = prevRecipes.concat(insertRecipe)
          return newList
        })
        setShowFom((prevShow) => !prevShow)
      }
    })
  }

  return (
    <form onSubmit={createRecipe}>
      <h2>Agregar nueva receta</h2>
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
        <label>Url de imagen</label>
        <br />
        <input
          value={recipeAsset}
          onChange={(event) => setRecipeAsset(event.target.value)}
          type='text'
        ></input>
      </div>
      <div>
        <label>Preparación</label>
        <br />
        <input
          value={recipeSteps}
          onChange={(event) => setRecipeSteps(event.target.value)}
          type='text'
        ></input>
      </div>
      <div>
        <button
          onClick={() => {
            setShowFom((prevShow) => !prevShow)
          }}
        >
          Cancelar
        </button>
        <button type='submit'>Agregar receta</button>
      </div>
    </form>
  )
}

export default NewRecipe
