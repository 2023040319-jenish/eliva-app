import { api } from './client'
import type { AuthResponse } from './types'

export async function login(email: string, password: string): Promise<AuthResponse> {
  const res = await api.post<AuthResponse>('/auth/login', { email, password })
  return res.data
}

export async function getMe(): Promise<AuthResponse['user']> {
  const res = await api.get<AuthResponse['user']>('/auth/me')
  return res.data
}
