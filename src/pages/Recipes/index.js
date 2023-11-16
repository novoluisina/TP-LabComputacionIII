import React, { useState, useEffect } from 'react'
import { getRecipes } from '../../services/recipes'
import { getComments } from '../../services/comments'
import RecipeList from '../../components/recipeList/RecipeList'
import NewComment from '../../components/newComment/NewComment'
import CommentList from '../../components/commentList/CommentList'
import { useParams } from 'react-router'

const Recipes = () => {
  const [recipes, setRecipes] = useState([])
  const [comments, setComments] = useState([])
  const { id } = useParams()

  useEffect(() => {
    getRecipes().then((serviceRecipes) => {
      setRecipes(serviceRecipes)
    })
    getComments().then((comms) => {
      const recipeComments = comms.filter((comm) => comm.recipeId === id)
      recipeComments.reverse()
      setComments(recipeComments)
    })
  }, [id])

  return (
    <>
      <div>
        <RecipeList recipes={recipes} />
      </div>
      <div>
        <h2>Comentarios</h2>
        <NewComment recipeId={id} setComments={setComments} />
        <CommentList
          comments={comments}
          setComments={setComments}
          setComments={setComments}
        />
      </div>
    </>
  )
}

export default Recipes
