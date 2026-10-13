import { useNavigate } from 'react-router-dom'
import { clearSession, getSessionUser } from '../auth/session'

export function AccountPage() {
  const navigate = useNavigate()
  const user = getSessionUser()

  function signOut() {
    clearSession()
    navigate('/', { replace: true })
  }

  return (
    <main className="page narrow">
      <h1>Your account</h1>
      <p className="lede">{user?.email}</p>
      <p>Authenticated routes will load catalog, cart, and orders from the API in later sprints.</p>
      <button className="button button-secondary" type="button" onClick={signOut}>
        Sign out
      </button>
    </main>
  )
}
