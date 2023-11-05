import React from 'react'
import { useState } from 'react'
import './NewComment.css'
import { postComments } from '../../services/comments'
import useUser from '../../hooks/useUser'

const NewComment = ({ recipeId, setComments }) => {
  const [textComment, setTextComment] = useState('')
  const { user } = useUser()

  const createComment = (event) => {
    event.preventDefault()

    const newComment = {
      text: textComment,
      recipeId: recipeId
    }

    postComments(user.accessToken, newComment).then((comment) => {
      setComments((prevComments) => {
        const newComments = [...prevComments]
        newComments.unshift(comment)
        return newComments
      })
    })
  }

  return (
    <form className='NewCommentContainer' onSubmit={createComment}>
      <div>
        <input
          value={textComment}
          placeholder='Escribe tu comentario'
          onChange={(event) => setTextComment(event.target.value)}
          type='text'
        />
      </div>
      <div>
        <button type='submit'>▶️</button>
      </div>
    </form>
  )
}

export default NewComment
