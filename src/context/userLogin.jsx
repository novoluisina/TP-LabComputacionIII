import React, { useState } from 'react'
// import { getUser } from '../services/login'

const UserLoginContext = React.createContext({})

export function UserLoginProvider({ children }) {
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
    <UserLoginContext.Provider value={{ user, setUser }}>
      {children}
    </UserLoginContext.Provider>
  )
}

export default UserLoginContext
