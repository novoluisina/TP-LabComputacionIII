import React, { useEffect } from 'react'
import { Navigate } from 'react-router'
import { getUser } from '../../services/login'
import useUser from '../../hooks/useUser'

const Protected = ({ children }) => {
  const { user, setUser } = useUser()

  const isAuth = !!user?.accessToken

  useEffect(() => {
    const loginUser = getUser()
    setUser(loginUser)
  }, [setUser])

  if (!isAuth) {
    return <Navigate to='/login' replace />
  } else {
    return children
  }
}

export default Protected
