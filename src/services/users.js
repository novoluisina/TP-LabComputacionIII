const postUser = (accessToken, user) => {
  return fetch('http://localhost:8000/users', {
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
  const apiURL = 'http://localhost:8000/users'
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
  const apiURL = `http://localhost:8000/users/${id}`
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
