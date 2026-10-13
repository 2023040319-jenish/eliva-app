import { useNavigate } from 'react-router-dom'
import { clearSession, getSessionUser } from '../auth/session'

export function DashboardPage() {
  const navigate = useNavigate()
  const user = getSessionUser()

  function signOut() {
    clearSession()
    navigate('/login', { replace: true })
  }

  return (
    <main className="page">
      <p className="eyebrow">Admin console</p>
      <h1>Operations dashboard</h1>
      <p className="lede">Signed in as {user?.email}</p>
      <p>
        Product, order, and role screens will attach to NestJS admin endpoints in later sprints.
        This app stays separate from the customer storefront.
      </p>
      <button className="button button-secondary" type="button" onClick={signOut}>
        Sign out
      </button>
    </main>
  )
}
