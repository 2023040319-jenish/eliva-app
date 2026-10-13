export type ApiSuccess<T> = {
  success: true
  data: T
  message?: string
}

export type ApiErrorBody = {
  code: string
  message: string
}

export type ApiFailure = {
  success: false
  error: ApiErrorBody
}

export class ApiError extends Error {
  code: string

  constructor(code: string, message: string) {
    super(message)
    this.name = 'ApiError'
    this.code = code
  }
}

export type SessionUser = {
  id: string
  email: string
  roles: string[]
}

export type AuthResponse = {
  token: string
  user: SessionUser
}
