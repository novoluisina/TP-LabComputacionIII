import React, { useState } from 'react'
import useUser from '../../hooks/useUser'
import { deleteComments, editComments } from '../../services/comments'

const CardComment = ({ textComment, userId, commentId, setComments }) => {
  const { user } = useUser()
  const [editing, setEditing] = useState(false)
  const [editedComment, setEditedComment] = useState(textComment)

  const borrarUnComentario = () => {
    deleteComments(user.accessToken, commentId).then((res) => {
      setComments((prevComments) => {
        const newComments = prevComments.filter(
          (comment) => comment.id !== commentId
        )
        return newComments
      })
      alert(res.message)
    })
  }

  const editarComentario = () => {
    if (editing) {
      // Lógica para enviar la solicitud PATCH con el comentario editado
      editComments(user.accessToken, commentId, { text: editedComment })
        .then((res) => {
          setComments((prevComments) => {
            const updatedComments = prevComments.map((comment) =>
              comment.id === commentId
                ? { ...comment, text: editedComment }
                : comment
            )
            return updatedComments
          })
          alert(res.message)
          setEditing(false) // Después de editar, deja de mostrar el campo de entrada
        })
        .catch((err) => {
          console.error(err)
          alert('Error al editar comentario')
        })
    } else {
      // Si no está editando, habilita la edición
      setEditing(true)
    }
  }
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {editing ? (
        <input
          type='text'
          value={editedComment}
          onChange={(e) => setEditedComment(e.target.value)}
        />
      ) : (
        <p>{textComment}</p>
      )}
      {user.id === userId && (
        <p onClick={editarComentario}>{editing ? '✔' : '✏'}</p>
      )}
      {!editing && user.id === userId && <p onClick={borrarUnComentario}>❌</p>}
    </div>
  )
}

export default CardComment
