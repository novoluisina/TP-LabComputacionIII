import React, { useState } from 'react'
import { postRecipes } from '../../services/recipes'
import useUser from '../../hooks/useUser'

const NewRecipe = ({ setRecipes, setShowFom }) => {
  const [recipeName, setRecipeName] = useState('')
  const [recipeTime, setRecipeTime] = useState('')
  const [recipeAsset, setRecipeAsset] = useState('')
  const [recipeSteps, setRecipeSteps] = useState('')
  const [recipeIngredients, setRecipeIngredients] = useState('')
  const { user } = useUser()

  const createRecipe = (event) => {
    event.preventDefault()
    const newRecipe = {
      title: recipeName,
      time: recipeTime,
      asset: recipeAsset
        ? recipeAsset
        : 'https://alicorp-prod-medias.s3-us-west-2.amazonaws.com/static-img/files/2016-05/2016-05-25222541_f7664ca7-3a1a-4b25-9f46-2056eef44c33$$72f445d4-8e31-416a-bd01-d7b980134d0f$$7D9C07D7-0DCB-4C30-86E5-86541658F0DA$$storage_image$$pt$$1.jpg',
      userId: user.id,
      steps: recipeSteps,
      ingredients: recipeIngredients
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
        <div>
          <label>Ingredientes</label>
          <br />
          <input
            value={recipeIngredients}
            onChange={(event) => setRecipeIngredients(event.target.value)}
            type='text'
          ></input>
        </div>
        <div></div>
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
