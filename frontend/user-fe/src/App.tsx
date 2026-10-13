import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { RequireAuth } from './auth/RequireAuth'
import { AccountPage } from './pages/AccountPage'
import { LandingPage } from './pages/LandingPage'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'

export default function App() {
  return (
    <div className="shell">
      <nav className="nav">
        <Link className="brand" to="/">
          Eliva
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/login">Sign in</Link>
          <Link to="/register">Register</Link>
          <Link to="/account">Account</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<RequireAuth />}>
          <Route path="/account" element={<AccountPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}
