import { useQuery } from '@tanstack/react-query'
import { getAllocations } from '../api/endpoints'
import { AllocationData } from '../types/types'

export const useAllocations = (fundId?: string) => {
  return useQuery<AllocationData>({
    queryKey: ['allocations', fundId],
    queryFn: () => {
      if (!fundId) {
        throw new Error('Fund ID is required')
      }
      return getAllocations(fundId)
    },
    enabled: !!fundId
  })
}