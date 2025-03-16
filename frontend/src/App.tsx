import { useMutualFunds } from './hooks/useMutualFunds'
import { InvestmentOverview } from './components/dashboard/InvestmentOverview'
import { AllocationDetails } from './components/dashboard/AllocationDetails'
import { OverlapAnalysis } from './components/dashboard/OverlapAnalysis'
import { Loader } from './components/ui/Loader'

function App() {
  const { data, isLoading, error } = useMutualFunds()

  if (isLoading) return <Loader />
  if (error) return <div className="p-4 text-red-500">Error: {error.message}</div>

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Investment Dashboard</h1>
      <InvestmentOverview data={data?.overview} />
      <AllocationDetails data={data?.allocations} />
      <OverlapAnalysis data={data?.overlaps} />
    </div>
  )
}

export default App