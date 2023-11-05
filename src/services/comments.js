const getComments = () => {
  return fetch('http://localhost:8000/comments', {
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
  return fetch('http://localhost:8000/comments', {
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

export { getComments, postComments }
