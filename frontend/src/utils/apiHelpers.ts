import { AxiosError } from 'axios'
import { ApiErrorResponse } from '../types/types'

export const handleApiError = (error: unknown) => {
  const axiosError = error as AxiosError<ApiErrorResponse>
  return {
    message: axiosError.response?.data?.message || 'An error occurred',
    status: axiosError.response?.status || 500
  }
}