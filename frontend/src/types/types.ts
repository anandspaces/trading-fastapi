export interface MutualFund {
  name: string
  investmentDate: string
  amountInvested: number
  isn: string
  nav: number
  returns: number
}

export interface Sector {
  name: string
  percentage: number
}

export interface Stock {
  name: string
  percentage: number
}

export interface MarketCap {
  type: string
  percentage: number
}

export interface AllocationData {
  name: string
  sectors: Sector[]
  stocks: Stock[]
  marketCaps: MarketCap[]
}

export interface OverlapData {
  pair: string
  overlap: number
}

export interface DashboardData {
  overview: MutualFund[]
  allocations: AllocationData[]
  overlaps: OverlapData[]
}

export interface ApiErrorResponse {
  message?: string
  [key: string]: unknown
}