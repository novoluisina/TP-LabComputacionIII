import React from 'react'

const Comment = ({
  setCommentHandler,
  addCommentHandler,
  deletedComment,
  newComment,
  comments
}) => {
  const onChangeCommentHandler = (event) => {
    setCommentHandler(event.target.value)
  }

  const changeCommentHandler = (event) => {
    event.preventDefault()
    addCommentHandler()
  }

  return (
    <form onSubmit={changeCommentHandler}>
      <h2>Comentarios</h2>
      <div>
        <div>
          <input
            type='text'
            value={newComment}
            onChange={onChangeCommentHandler}
            placeholder='Escribe un comentario'
          ></input>
          <button type='submit' onClick={addCommentHandler}>
            Agregar
          </button>
        </div>

        <div>
          {comments.map((comment) => (
            <div key={comment.id}>
              <p>{comment.text}</p>
              <button onClick={() => deletedComment(comment.id)}></button>
            </div>
          ))}
        </div>
      </div>
    </form>
  )
}

export default Comment
