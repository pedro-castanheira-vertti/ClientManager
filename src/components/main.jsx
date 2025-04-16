import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from '../components/Pages/Login/Login'
import RegisterUser from './RegisterUser/RegisterUser'
import Home from './Pages/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RegisterLogin from './RegisterUser/RegisterUser'
import UserDetails from './Pages/Home/UserDetails/UserDetails'

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
    element: <RegisterLogin />
  },
  {
    path: '/userDetails',
    element: <UserDetails />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
