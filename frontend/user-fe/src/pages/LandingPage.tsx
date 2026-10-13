import { Link } from 'react-router-dom'

export function LandingPage() {
  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">Custom Hampers</p>
        <h1>Build a hamper that actually fits the person.</h1>
        <p className="lede">
          Browse the catalog, sign in with email, and order through the live API. This
          customer app is the public storefront for Eliva.
        </p>
        <div className="actions">
          <Link className="button" to="/register">
            Create account
          </Link>
          <Link className="button button-secondary" to="/login">
            Sign in
          </Link>
        </div>
      </header>
    </main>
  )
}
