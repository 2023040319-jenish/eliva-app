import { type FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { register } from '../api/auth'
import { ApiError } from '../api/types'

export function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  const [pending, setPending] = useState(false)

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)
    setMessage(null)
    setPending(true)
    try {
      const result = await register(email, password)
      setMessage(
        result.message ?? 'Check your email for the OTP to verify this account.',
      )
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Unable to register.')
    } finally {
      setPending(false)
    }
  }

  return (
    <main className="page narrow">
      <h1>Create account</h1>
      <p className="lede">Registration talks to the real auth API. OTP is sent by the backend.</p>
      <form className="form" onSubmit={onSubmit}>
        <label>
          Email
          <input
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            autoComplete="new-password"
            required
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {error ? <p className="error">{error}</p> : null}
        {message ? <p className="success">{message}</p> : null}
        <button className="button" type="submit" disabled={pending}>
          {pending ? 'Creating account…' : 'Register'}
        </button>
      </form>
      <p>
        Already registered? <Link to="/login">Sign in</Link>
      </p>
    </main>
  )
}
