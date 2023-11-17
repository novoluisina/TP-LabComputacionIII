import React, { useEffect, useState } from 'react'
import { deleteUsers, getUsers } from '../../services/users'
import useUser from '../../hooks/useUser'

const UserList = () => {
  const [users, setUsers] = useState([])
  const { user } = useUser()

  useEffect(() => {
    getUsers(user.accessToken)
      .then((usersData) => setUsers(usersData))
      .catch((error) => console.error('Error al mostrar usuarios:', error))
  }, [user])

  const handleDelete = (userId) => {
    deleteUsers(user.accessToken, userId)
      .then((res) => {
        setUsers((prevRecipes) =>
          prevRecipes.filter((user) => user.id !== userId)
        )
        alert(res.message)
      })
      .catch((err) => {
        console.error(err)
        alert('Error al eliminar ')
      })
  }

  return (
    <div>
      <h2>Lista de Usuarios:</h2>
      <ul>
        {users.map((user) => (
          <div key={user.id}>
            <li>
              <strong>Username:</strong> {user.username} |{' '}
              <strong>Email:</strong> {user.email} | <strong>Role:</strong>{' '}
              {user.role}
            </li>
            <p onClick={() => handleDelete(user.id)}>❌</p>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default UserList
