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
