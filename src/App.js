import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Login from './components/login/Login'
import Home from './components/home/Home'
import Recipes from './components/recipes/Recipes'
import Protected from './components/protected/Protected'
import GeneralView from './components/generalView/GeneralView'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const loginHandler = () => {
    setIsLoggedIn(true)
  }

  const router = createBrowserRouter([
    { path: '/', 
      element: 
      <GeneralView>
        <Home/>
      </GeneralView> },

    { path: '/login',
      element: 
      <GeneralView>
        <Login onLogin={loginHandler} />
      </GeneralView>},
      
    {path: '/recetas',
      element: 
        <GeneralView>
          <Protected isLoggedIn={isLoggedIn}>
            <Recipes/>
          </Protected>
        </GeneralView>
      
    }

  ])
  return <RouterProvider router={router}/>
}
export default App
