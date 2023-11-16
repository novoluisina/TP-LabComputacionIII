import React, { useState, useEffect } from 'react'
import { getRecipes } from '../../services/recipes'
import RecipeList from '../../components/recipeList/RecipeList'
import useUser from '../../hooks/useUser'
import NewRecipe from '../../components/newRecipe/NewRecipe'

const MyRecipes = () => {
  const [recipes, setRecipes] = useState([])
  const [showForm, setShowFom] = useState(true)
  const { user, userRole } = useUser()

  useEffect(() => {
    getRecipes().then((serviceRecipes) => {
      const myRecipes = serviceRecipes.filter((recipe) => {
        return recipe.userId === user.id
      })
      setRecipes(myRecipes)
    })
  }, [user])

  const changeShowFormHandler = () => {
    setShowFom(!showForm)
  }

  return (
    <>
      {' '}
      <div>
        {showForm ? (
          <button type='button' onClick={changeShowFormHandler}>
            Agregar Nueva Receta
          </button>
        ) : (
          <NewRecipe setRecipes={setRecipes} setShowFom={setShowFom} />
        )}
      </div>
      <RecipeList
        recipes={recipes}
        userRole={userRole}
        setRecipes={setRecipes}
      />
    </>
  )
}

export default MyRecipes