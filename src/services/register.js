const register = (user) => {
  return fetch('http://localhost:8000/register', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then((response) => response.json())
    .then((newUser) => {
      return newUser
    })
    .catch((err) => alert(err))
}

export { register }
