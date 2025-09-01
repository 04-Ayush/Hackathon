import { createBrowserRouter, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import UserDetails from './pages/UserDetails'
import Hospital from './pages/Hospital'
import Profile from './pages/Profile'

export const router = createBrowserRouter([
  { path: '/', element: <Navigate to="/login" replace /> },
  { path: '/login', element: <Login /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/user-details', element: <UserDetails /> },
  { path: '/hospital', element: <Hospital /> },
  { path: '/profile', element: <Profile /> },
])

