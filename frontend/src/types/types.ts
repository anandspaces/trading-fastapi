export interface MutualFund {
  name: string
  investment_date: string
  amount_invested: number
  isin: string
  nav: number
  returns: number
}

export interface Sector {
  sector: string
  percentage: number
}

export interface Stock {
  stock: string
  percentage: number
}

export interface MarketCap {
  cap_type: string
  percentage: number
}

export interface AllocationData {
  sectors: Sector[]
  stocks: Stock[]
  market_caps: MarketCap[]
}

export interface OverlapData {
  fund_a: string
  fund_b: string
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