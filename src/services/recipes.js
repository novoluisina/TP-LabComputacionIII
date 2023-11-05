import { refreshToken } from './refreshToken'

const getRecipe = (id) => {
  const apiURL = `http://localhost:8000/recipes/${id}`
  return fetch(apiURL, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((recipe) => {
      return recipe
    })
    .catch((err) => alert(err))
}

const getRecipes = () => {
  const apiURL = 'http://localhost:8000/recipes'
  return fetch(apiURL, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((recipes) => {
      // console.log(recipes)
      return recipes
    })
    .catch((err) => alert(err))
}

const postRecipes = (accessToken, newRecipe, rToken) => {
  const apiURL = 'http://localhost:8000/recipes'
  return fetch(apiURL, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`
    },
    body: JSON.stringify(newRecipe)
  })
    .then((response) => {
      if (accessToken && response.status === 401 && rToken) {
        return refreshToken(rToken).then((newTokens) => {
          // Se vuelve a llamar con el Token actualizado
          return postRecipes(newTokens.accessToken, newRecipe, '').then(
            (recipe) => {
              recipe.accessToken = newTokens.accessToken
              return recipe
            }
          )
        })
      }
      return response.json()
    })
    .then((data) => {
      return data
    })
    .catch((err) => alert(err))
}

const deleteRecipes = (accessToken, id) => {
  const apiURL = `http://localhost:8000/recipes/${id}`
  return fetch(apiURL, {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`
    }
  })
    .then((response) => {
      if (response.status === 200)
        return { message: 'Receta eliminada correctamente' }
      return { message: 'Error al eliminar la receta' }
    })
    .then((message) => {
      return message
    })
    .catch((err) => alert(err))
}

export { getRecipe, getRecipes, postRecipes, deleteRecipes }
