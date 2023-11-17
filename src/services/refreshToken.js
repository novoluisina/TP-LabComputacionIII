export const refreshToken = (refreshToken) => {
  const apiURL = 'https://fake-api-recetas.onrender.com/refresh-token'
  return fetch(apiURL, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify({
      token: refreshToken
    })
  })
    .then((res) => {
      if (res.status === 400) {
        return { error: 'Usuario o contraseña incorrecto' }
      }
      return res.json()
    })
    .then((newTokens) => {
      // localStorage.setItem('user', JSON.stringify(user))
      return newTokens
    })
}
