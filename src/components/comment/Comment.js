import React from 'react';

const Comment = ({ setCommentHandler, newComment }) => {
  const onChangeCommentHandler = (event) => {
    setCommentHandler(event.target.value);
  };

  // const changeCommentHandler = (event) => {
  //   event.preventDefault();
  //   addCommentHandler();
  // };

  return (
    <form>
      <h2>Comentarios</h2>
      <div>
        <div>
          <label>Mensaje</label><br />
          <input
            value={newComment}
            onChange={onChangeCommentHandler}
            type="text"
          ></input>
        </div>
        <br />
        <div>
          <button type="submit">Agregar comentario</button>
        </div>
      </div>
    </form>
  );
};

export default Comment;
