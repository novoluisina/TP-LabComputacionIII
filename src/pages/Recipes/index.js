import React, { useState, useEffect } from 'react'
import { getRecipes } from '../../services/recipes'
import { getComments } from '../../services/comments'
import RecipeList from '../../components/recipeList/RecipeList'

const Recipes = () => {
  const [recipes, setRecipes] = useState([])
  const [comments, setComments] = useState([])

  useEffect(() => {
    getRecipes().then((serviceRecipes) => {
      setRecipes(serviceRecipes)
    })
  }, [])

  useEffect(() => {
    getComments().then((serviceComments) => {
      setComments(serviceComments)
    })
  }, [])

  return <RecipeList recipes={recipes} />
}

export default Recipes
