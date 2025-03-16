import { useQuery } from '@tanstack/react-query'
import { getOverlaps } from '../api/endpoints'
import { OverlapData } from '../types/types'

export const useOverlaps = () => {
  return useQuery<OverlapData[]>({
    queryKey: ['overlaps'],
    queryFn: getOverlaps
  })
}