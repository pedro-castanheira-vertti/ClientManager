import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './Login/Login'
import RegisterUser from './RegisterUser/RegisterUser'
import Home from './Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RegisterLogin from './RegisterLogin/RegisterLogin'

const router = createBrowserRouter([
  {
    path: '',
    element: <Login />
  },
  {
    path: '/registerUser',
    element: <RegisterUser />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/registerLogin',
    element: <RegisterLogin/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
