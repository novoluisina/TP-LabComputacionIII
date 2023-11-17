import React, { useEffect, useState } from 'react'
import { CardRecipe } from '../../components/cardRecipe/CardRecipe'
import { getRecipe } from '../../services/recipes'
import { useParams } from 'react-router'
import CommentList from '../../components/commentList/CommentList'
import { getComments } from '../../services/comments'
import './index.css'
import NewComment from '../../components/newComment/NewComment'
import { getUsers } from '../../services/users'
import useUser from '../../hooks/useUser'

const Recipe = () => {
  const [recipe, setRecipe] = useState([])
  const [comments, setComments] = useState([])
  const [users, setUsers] = useState([])
  const { id } = useParams()
  const { user } = useUser()

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

  useEffect(() => {
    getUsers(user.accessToken)
      .then((usersData) => setUsers(usersData))
      .catch((error) => console.error('Error al mostrar usuarios:', error))
  }, [user])

  return (
    <>
      {recipe && (
        <div className='RecipePageContainer'>
          <div className='recipeStyle'>
            <CardRecipe
              id={recipe.id}
              title={recipe.title}
              time={recipe.time}
              asset={recipe.asset}
              clickable={false}
            />
          </div>
          <div className='datosRecipe'>
            <div>
              <h2>Preparación:</h2>
              <p>{recipe.steps}</p>
            </div>
            <div>
              <h2>Ingredientes:</h2>
              <p>{recipe.ingredients}</p>
            </div>
            <div>
              <h2>Comentarios</h2>
              <NewComment recipeId={id} setComments={setComments} />
              <CommentList comments={comments} setComments={setComments} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Recipe
