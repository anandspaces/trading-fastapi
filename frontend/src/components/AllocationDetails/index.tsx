import { useState } from 'react'
import { AllocationData } from '../../types/types'
import { SectorAllocation } from './SectorAllocation'
import { StockAllocation } from './StockAllocation'
import { MarketCapAllocation } from './MarketCapAllocation'

interface Props {
  data?: AllocationData[]
}

export const AllocationDetails = ({ data = [] }: Props) => {
  const [selectedFund, setSelectedFund] = useState(data[0]?.id)

  const currentFund = data.find(fund => fund.id === selectedFund)

  return (
    <div className="mb-12">
      <h2 className="text-xl font-semibold mb-6">Fund Allocation Details</h2>
      
      <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
        {data.map((fund) => (
          <button
            key={fund.id}
            onClick={() => setSelectedFund(fund.id)}
            className={`px-4 py-2 rounded-lg whitespace-nowrap ${
              selectedFund === fund.id 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {fund.id}
          </button>
        ))}
      </div>

      {currentFund && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SectorAllocation data={currentFund.sectors} />
          <StockAllocation data={currentFund.stocks} />
          <MarketCapAllocation data={currentFund.market_caps} />
        </div>
      )}
    </div>
  )
}