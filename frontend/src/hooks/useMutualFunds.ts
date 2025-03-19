import { useQuery } from '@tanstack/react-query'
import { getMutualFunds } from '../api/endpoints'
import { DashboardData } from '../types/types'

export const useMutualFunds = () => {
  return useQuery<DashboardData>({
    queryKey: ['mutual_funds'],
    queryFn: getMutualFunds,
    staleTime: 1000 * 60 * 5 // 5 minutes
  })
}