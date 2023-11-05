import { useEffect, useContext } from 'react'
import UserLoginContext from '../context/userLogin'
import { getUser } from '../services/login'

export default function useUser() {
  const { user, setUser } = useContext(UserLoginContext)
  const userRole = user?.role

  useEffect(() => {
    if (user === null) {
      const loginUser = getUser()
      return setUser(loginUser)
    }
  }, [user, setUser])

  return { user, setUser, userRole }
}
