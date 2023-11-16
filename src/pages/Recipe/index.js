import React, { useEffect, useState } from 'react'
import { CardRecipe } from '../../components/cardRecipe/CardRecipe'
import { getRecipe } from '../../services/recipes'
import { useParams } from 'react-router'
import CommentList from '../../components/commentList/CommentList'
import { getComments } from '../../services/comments'
import './index.css'
import NewComment from '../../components/newComment/NewComment'

const Recipe = () => {
  const [recipe, setRecipe] = useState([])
  const [comments, setComments] = useState([])
  const { id } = useParams()

  useEffect(() => {
    getRecipe(id).then((rec) => {
      setRecipe(rec)
    })
    getComments().then((comms) => {
      const recipeComments = comms.filter((comm) => comm.recipeId === id)
      recipeComments.reverse()
      setComments(recipeComments)
    })
  }, [id])

  return (
    <>
      {recipe && (
        <div className='RecipePageContainer'>
          <CardRecipe
            id={recipe.id}
            title={recipe.title}
            time={recipe.time}
            asset={recipe.asset}
            clickable={false}
          />
          <div>
            <h2>Preparación:</h2>
            <p>{recipe.steps}</p>
          </div>
          <div>
            <h2>Comentarios</h2>
            <NewComment recipeId={id} setComments={setComments} />
            <CommentList comments={comments} setComments={setComments} />
          </div>
        </div>
      )}
    </>
  )
}

export default Recipe
