import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Login from './components/login/Login'
import Home from './components/home/Home'
import Recipes from './components/recipes/Recipes'
import Protected from './components/protected/Protected'
import GeneralView from './components/generalView/GeneralView'
import NewUser from './components/newUser/NewUser'
import { AuthProvider } from './context/auth'

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
      path: '/recetas',
      element: (
        <GeneralView>
          <Protected>
            <Recipes />
          </Protected>
        </GeneralView>
      )
    },
    {
      path: '/newuser',
      element: (
        <GeneralView>
          <NewUser />
        </GeneralView>
      )
    }
  ])

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}
export default App
