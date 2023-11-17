const getRecipe = (id) => {
  const apiURL = `https://fake-api-recetas.onrender.com/recipes/${id}`
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
  const apiURL = 'https://fake-api-recetas.onrender.com/recipes'
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

const postRecipes = (accessToken, newRecipe) => {
  const apiURL = 'https://fake-api-recetas.onrender.com/recipes'
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
      return response.json()
    })
    .then((data) => {
      return data
    })
    .catch((err) => alert(err))
}

const deleteRecipes = (accessToken, id) => {
  const apiURL = `https://api-recetas-wyj1.onrender.com/recipes/${id}`
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

const editRecipe = (accessToken, id, updatedRecipe) => {
  const apiURL = `https://api-recetas-wyj1.onrender.com/recipes/${id}`
  return fetch(apiURL, {
    method: 'PATCH',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`
    },
    body: JSON.stringify(updatedRecipe)
  })
    .then((response) => {
      if (response.status === 200)
        return { message: 'Receta editado correctamente' }
      return { message: 'Error al editar receta' }
    })
    .then((message) => {
      return message
    })
    .catch((err) => alert(err))
}
export { getRecipe, getRecipes, postRecipes, deleteRecipes, editRecipe }
