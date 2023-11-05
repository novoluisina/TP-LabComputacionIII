import React, { useContext, useEffect } from 'react'
import { Navigate } from 'react-router'
import AuthContext from '../../context/auth'
import { getUser } from '../../services/login'

const Protected = ({ children }) => {
  const { user, setUser } = useContext(AuthContext)

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
