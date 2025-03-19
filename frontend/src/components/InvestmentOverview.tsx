import { MutualFund } from '../types/types'
import { Card } from './Card'

interface Props {
  data?: MutualFund[]
}

export const InvestmentOverview = ({ data }: Props) => (
  <div className="mb-12">
    <h2 className="text-xl font-semibold mb-6">Investment Overview</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data?.map((fund) => (
        <Card key={fund.isn}>
          <h3 className="font-medium text-lg mb-2">{fund.name}</h3>
          <div className="space-y-2 text-gray-600">
            <p>Invested: ₹{fund.amountInvested.toLocaleString()}</p>
            <p>Returns: <span className="text-green-600">{fund.returns}%</span></p>
            <p>Date: {new Date(fund.investmentDate).toLocaleDateString()}</p>
            <p className="text-sm text-gray-400">ISN: {fund.isn}</p>
          </div>
        </Card>
      ))}
    </div>
  </div>
)