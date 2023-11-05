import { useEffect, useContext, useState } from 'react'
import UserLoginContext from '../context/userLogin'
import { getUser } from '../services/login'

export default function useUser() {
  const { user, setUser } = useContext(UserLoginContext)
  const [loading, setLoading] = useState(true)
  const userRole = user?.role

  useEffect(() => {
    if (user === null) {
      const loginUser = getUser()
      setUser(loginUser)
    }
    setLoading(false)
  }, [user, setUser, setLoading])

  return { loading, user, setUser, userRole }
}
