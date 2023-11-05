import React, { useState } from 'react'

const AuthContext = React.createContext({})

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  // useEffect(() => {
  //   const checkLoggedIn = async () => {
  //     let loginUser = getUser()
  //     if (loginUser === null) {
  //       localStorage.setItem('user', '')
  //       loginUser = ''
  //     }
  //     setUser(loginUser)
  //   }

  //   checkLoggedIn()
  // }, [])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
