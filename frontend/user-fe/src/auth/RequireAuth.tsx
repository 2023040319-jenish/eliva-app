import { Navigate, Outlet } from 'react-router-dom'
import { getAccessToken } from './session'

export function RequireAuth() {
  if (!getAccessToken()) {
    return <Navigate to="/login" replace />
  }
  return <Outlet />
}
