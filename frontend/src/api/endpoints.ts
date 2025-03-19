import { client } from './client'
import {
  MutualFund,
  AllocationData,
  OverlapData
} from '../types/types'

// Get all mutual funds overview data
export const getMutualFunds = async (): Promise<{
  mutual_funds: MutualFund[]
  allocations: AllocationData[]
  overlaps: OverlapData[]
}> => {
  const response = await client.get('/mutual-funds')
  return response.data
}

// Get detailed allocations for a specific fund
export const getAllocations = async (fundId: string): Promise<AllocationData> => {
  const response = await client.get(`/allocations/${fundId}`)
  return response.data
}

// Get overlap analysis data
export const getOverlaps = async (): Promise<OverlapData[]> => {
  const response = await client.get('/overlaps')
  return response.data
}

// Get single mutual fund details
export const getMutualFundById = async (id: string): Promise<MutualFund> => {
  const response = await client.get(`/mutual-funds/${id}`)
  return response.data
}

// Search mutual funds
export const searchMutualFunds = async (query: string): Promise<MutualFund[]> => {
  const response = await client.get('/mutual-funds/search', {
    params: { q: query }
  })
  return response.data
}

// Get historical NAV data for a fund
export const getNavHistory = async (
  fundId: string,
  period: '1m' | '3m' | '6m' | '1y' | '5y'
): Promise<{ date: string; nav: number }[]> => {
  const response = await client.get(`/mutual-funds/${fundId}/nav-history`, {
    params: { period }
  })
  return response.data
}

// Get fund performance comparison
export const getPerformanceComparison = async (
  fundIds: string[]
): Promise<{
  labels: string[]
  datasets: { label: string; data: number[] }[]
}> => {
  const response = await client.get('/mutual-funds/compare-performance', {
    params: { ids: fundIds.join(',') }
  })
  return response.data
}

// Get sector-wise performance
export const getSectorPerformance = async (): Promise<
  { sector: string; performance: number }[]
> => {
  const response = await client.get('/mutual-funds/sector-performance')
  return response.data
}

// Get fund suggestions based on risk profile
export const getFundSuggestions = async (
  riskProfile: 'low' | 'medium' | 'high'
): Promise<MutualFund[]> => {
  const response = await client.get('/mutual-funds/suggestions', {
    params: { risk: riskProfile }
  })
  return response.data
}