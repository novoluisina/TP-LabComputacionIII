export const login = ({ username, password }) => {
  const apiURL = 'http://localhost:8000/login/'
  return fetch(apiURL, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify({
      username,
      password
    })
  })
    .then((res) => {
      if (res.status === 400) {
        return { error: 'Usuario o contraseña incorrecto' }
      }
      return res.json()
    })
    .then((user) => {
      localStorage.setItem('user', JSON.stringify(user))
      return user
    })
}

export const getUser = () => {
  const user = localStorage.getItem('user')
  if (!user) return {}
  return JSON.parse(user)
}