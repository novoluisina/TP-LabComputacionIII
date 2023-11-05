const getRecipes = () => {
  return fetch('http://localhost:8000/recipes', {
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

export { getRecipes }
