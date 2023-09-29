import {
  RouterProvider,
  createBrowserRouter,
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Login from './components/login/Login'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import Recipes from './components/recipes/Recipes'
import Protected from './components/protected/Protected'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const loginHandler = () => {
    setIsLoggedIn(true)
  }

  // const router = createBrowserRouter([
  //   { path: '/', element: <Home /> },
  //   { path: '/login', element: <Login onLogin={loginHandler} /> },
  //   {
  //     path: '/recetas',
  //     element: (
  //       <Protected isLoggedIn={isLoggedIn}>
  //         <Recipes />
  //       </Protected>
  //     )
  //   }
  // ])
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/recetas'
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <Recipes />
              </Protected>
            }
          />
          <Route path='/login' element={<Login onLogin={loginHandler} />} />
        </Routes>
      </BrowserRouter>
      {/* <RouterProvider router={router}>
        <div className='container'>{router}</div>
      </RouterProvider> */}
    </div>
  )
}
export default App
