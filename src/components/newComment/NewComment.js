import React from 'react'
import{useState} from 'react'

const NewComment = () => {
    const [textComment, setTextComment] = useState('');
  
    const createComment = (event) => {
      // event.preventDefault();   actualiza solo 
  
      fetch('http://localhost:8000/comments', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjYsIm5hbWUiOiJBZG1pbmlzdHJhdG9yICIsImF2YXRhciI6Imh0dHBzOi8vcm9ib2hhc2gub3JnL2VhcXVlcXVhc2luY2lkdW50LnBuZz9zaXplPTUweDUwJnNldD1zZXQxIiwiaWF0IjoxNjk4NjkwMjc2LCJleHAiOjE2OTg2OTExNzZ9.CH19KA3Su1fQLojKhDjV6_3zpwv5MvyBlY3h59-AMtA',
        },
        body: JSON.stringify({
          text: textComment,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Comentario creado');
          console.log(data);
        })
        .catch((err) => console.error(err));
    };
  
    return (
      <form onSubmit={createComment}>
        <h2>Agregar comentario</h2>
        <div>
          <input
            value={textComment}
            onChange={(event) => setTextComment(event.target.value)}
            type="text"
          />
        </div>
        <div>
          <br />
          <button type="submit">Comentar</button>
        </div>
      </form>
    );
  };
  
  export default NewComment;