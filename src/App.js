
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import Recipes from './components/recipes/Recipes';


function App() {
  const router = createBrowserRouter([
    {path:"login", element:<Login/>}, 
  
  ])
  return <RouterProvider router={router}/>}

export default App;
