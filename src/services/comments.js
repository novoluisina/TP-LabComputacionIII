const getComments = () => {
  return fetch('https://fake-api-recetas.onrender.com/comments', {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((comments) => comments)
    .catch((err) => alert(err))
}

const postComments = (accessToken, newComment) => {
  return fetch('https://fake-api-recetas.onrender.com/comments', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`
    },
    body: JSON.stringify(newComment)
  })
    .then((response) => response.json())
    .then((comments) => {
      console.log(comments)
      return comments
    })
    .catch((err) => alert(err))
}

const deleteComments = (accessToken, id) => {
  const apiURL = `https://fake-api-recetas.onrender.com/comments/${id}`
  return fetch(apiURL, {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`
    }
  })
    .then((response) => {
      if (response.status === 200)
        return { message: 'Comentario eliminado correctamente' }
      return { message: 'Error al eliminar comentario' }
    })
    .then((message) => {
      return message
    })
    .catch((err) => alert(err))
}
const editComments = (accessToken, id, newCommentEdit) => {
  const apiURL = `https://fake-api-recetas.onrender.com/comments/${id}`
  return fetch(apiURL, {
    method: 'PATCH',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`
    },
    body: JSON.stringify(newCommentEdit)
  })
    .then((response) => {
      if (response.status === 200)
        return { message: 'Comentario editado correctamente' }
      return { message: 'Error al editar comentario' }
    })
    .then((message) => {
      return message
    })
    .catch((err) => alert(err))
}
export { getComments, postComments, deleteComments, editComments }
