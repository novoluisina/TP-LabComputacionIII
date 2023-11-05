import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/index'
import Home from './pages/Home/index'
import Recipes from './pages/Recipes/index'
import Protected from './components/protected/Protected'
import GeneralView from './components/generalView/GeneralView'
import NewUser from './components/newUser/NewUser'
import { UserLoginProvider } from './context/userLogin'
import Register from './pages/Register'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <GeneralView>
          <Home />
        </GeneralView>
      )
    },
    {
      path: '/login',
      element: (
        <GeneralView>
          {/* <Login onLogin={loginHandler} /> */}
          <Login />
        </GeneralView>
      )
    },
    {
      path: '/misrecetas',
      element: (
        <GeneralView>
          {/* <Protected> */}
          <Recipes />
          {/* </Protected> */}
        </GeneralView>
      )
    },
    {
      path: '/recetas',
      element: (
        <GeneralView>
          {/* <Protected> */}
          <Recipes />
          {/* </Protected> */}
        </GeneralView>
      )
    },
    {
      path: '/registrar',
      element: (
        <GeneralView>
          <Register />
        </GeneralView>
      )
    }
  ])

  return (
    <UserLoginProvider>
      <RouterProvider router={router} />
    </UserLoginProvider>
  )
}
export default App
