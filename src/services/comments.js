const getComments = () => {
  return fetch('http://localhost:8000/comments', {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((comments) => {
      // console.log('Resultado de comment')
      // console.log(comments)
      return comments
    })
    .catch((err) => alert(err))
}

export { getComments }
