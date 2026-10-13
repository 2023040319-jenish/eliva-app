import axios, { type AxiosError } from 'axios'
import { ApiError, type ApiFailure, type ApiSuccess } from './types'
import { getAccessToken } from '../auth/session'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:3000',
  headers: { 'Content-Type': 'application/json' },
})

api.interceptors.request.use((config) => {
  const token = getAccessToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

api.interceptors.response.use(
  (response) => {
    const body = response.data as ApiSuccess<unknown> | unknown
    if (body && typeof body === 'object' && 'success' in body && (body as ApiSuccess<unknown>).success) {
      response.data = (body as ApiSuccess<unknown>).data
    }
    return response
  },
  (error: AxiosError<ApiFailure>) => {
    const envelope = error.response?.data
    if (envelope && typeof envelope === 'object' && envelope.success === false && envelope.error) {
      return Promise.reject(new ApiError(envelope.error.code, envelope.error.message))
    }
    if (!error.response) {
      return Promise.reject(
        new ApiError('NETWORK_ERROR', 'The API is not reachable. Start the NestJS server and try again.'),
      )
    }
    return Promise.reject(
      new ApiError('UNEXPECTED_ERROR', 'Something went wrong. Please try again.'),
    )
  },
)

export { api }
