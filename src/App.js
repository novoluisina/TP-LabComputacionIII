import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/index'
import Home from './pages/Home/index'
import Recipes from './pages/Recipes/index'
import Protected from './components/protected/Protected'
import GeneralView from './components/generalView/GeneralView'
import { UserLoginProvider } from './context/userLogin'
import Register from './pages/Register'
import MyRecipes from './pages/MyRecipes'
import Recipe from './pages/Recipe'
import UserList from './pages/Users'

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
          <Protected>
            <MyRecipes />
          </Protected>
        </GeneralView>
      )
    },
    {
      path: '/recetas',
      element: (
        <GeneralView>
          <Recipes />
        </GeneralView>
      )
    },
    {
      path: '/receta/:id',
      element: (
        <GeneralView>
          <Protected>
            <Recipe />
          </Protected>
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
    },
    {
      path: '/users',
      element: (
        <GeneralView>
          <UserList />
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
export default App