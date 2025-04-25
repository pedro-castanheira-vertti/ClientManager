import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Pages/Login/Login'
import RegisterCorretor from './Pages/RegisterCorretor/RegisterCorretor'
import Home from './Pages/Home/Home'
import UserDetails from './Pages/UserDetails/UserDetails'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/registerCorretor',
    element: <RegisterCorretor />
  },
  {
    path: '/home',
    element: <Home />
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
