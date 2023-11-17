const postUser = (accessToken, user) => {
  return fetch('https://fake-api-recetas.onrender.com/users', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`
    },
    body: JSON.stringify(user)
  })
    .then((response) => response.json())
    .then((user) => {
      // console.log(user)
      return user
    })
    .catch((err) => alert(err))
}

export { postUser }

const getUsers = (accessToken) => {
  const apiURL = 'https://fake-api-recetas.onrender.com/users'
  return fetch(apiURL, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`
    }
  })
    .then((response) => response.json())
    .then((users) => {
      return users
    })
    .catch((err) => alert(err))
}

export { getUsers }

const deleteUsers = (accessToken, id) => {
  const apiURL = ` https://fake-api-recetas.onrender.com/users/${id}`
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
        return { message: 'Usuario eliminado correctamente' }
      return { message: 'Error al eliminar usuario' }
    })
    .then((message) => {
      return message
    })
    .catch((err) => alert(err))
}
export { deleteUsers }
