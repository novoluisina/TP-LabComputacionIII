import React, { useState, useEffect } from 'react'
import { getRecipes } from '../../services/recipes'
import { getComments } from '../../services/comments'
import RecipeList from '../../components/recipeList/RecipeList'
import NewComment from '../../components/newComment/NewComment'
import CommentList from '../../components/commentList/CommentList'

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

  return (
    <>
      <div>
        <RecipeList recipes={recipes} />
      </div>
      <div>
        <h2>Comentarios</h2>
        <NewComment />
        <CommentList comments={comments} setComments={setComments} />
      </div>
    </>
  )
}

export default Recipes