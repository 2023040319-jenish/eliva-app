import { Navigate, Outlet } from 'react-router-dom'
import { getAccessToken, getSessionUser } from './session'

export function RequireAdmin() {
  const token = getAccessToken()
  const user = getSessionUser()

  if (!token || !user) {
    return <Navigate to="/login" replace />
  }

  if (!user.roles.includes('admin')) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}
