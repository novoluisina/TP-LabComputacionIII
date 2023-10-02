import React from 'react';

const Comment = ({ setEnteredTextHandler, submitRecipeHandler, enteredText }) => {
  const changeEnteredTextHandler = (event) => {
    setEnteredTextHandler(event.target.value);
  };

  const changeTextHandler = (event) => {
    event.preventDefault();
    submitRecipeHandler();
  };

  return (
    <form onSubmit={changeTextHandler}>
      <h2>Agregar un comentario</h2>
      <div>
        <div>
          <label>Mensaje</label><br />
          <input
            value={enteredText}
            onChange={changeEnteredTextHandler}
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
