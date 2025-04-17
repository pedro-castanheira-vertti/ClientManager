import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from '../components/Pages/Login/Login'
import RegisterUser from './RegisterUser/ModalCreateUser'
import Home from './Pages/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RegisterCorretor from './Pages/RegisterLogin/RegisterCorretor'
import UserDetails from './Pages/Home/UserDetails/UserDetails'
import '../styles/global.css'

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
    path: '/registerCorretor',
    element: <RegisterCorretor />
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
