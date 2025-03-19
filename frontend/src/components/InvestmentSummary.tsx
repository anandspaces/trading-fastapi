import { MutualFund } from '../types/types'
import { Card } from './Card'

interface Props {
  data?: MutualFund[]
}

export const InvestmentSummary = ({ data }: Props) => (
  <div className="mb-12">
    {data && data.length > 0 ? (
      /* Render fund holdings when data exists */
      <>
        <h3 className="text-xl font-semibold mb-6">Your Fund Holdings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((fund) => (
            <Card key={fund.isin}>
              <h3 className="font-medium text-lg mb-2">{fund.name}</h3>
              <div className="space-y-2 text-gray-600">
                <p>Invested: ₹{fund.amount_invested.toLocaleString()}</p>
                <p>Returns: <span className="text-green-600">{fund.returns}%</span></p>
                <p>Date: {new Date(fund.investment_date).toLocaleDateString()}</p>
                <p className="text-sm text-gray-400">ISN: {fund.isin}</p>
              </div>
            </Card>
          ))}
        </div>
      </>
    ) : (
      /* Render summary cards when no data */
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Current Investment Value Card */}
        <div className="flex flex-col justify-between bg-gray-900 p-6 rounded-lg shadow-sm text-white">
          <div className="flex justify-between space-y-3">
            <h3 className="text-lg font-medium border-l-emerald-600">Current Investment Value</h3>
            <div className="flex flex-col text-green-600">
              <span className="text-sm">↑+0.6%</span>
              <span className="text-xs">1D return</span>
            </div>
          </div>
          <div className="mt-3">
            <p className="text-2xl font-semibold">₹5,75,000</p>
          </div>
        </div>

        {/* Initial Investment Card */}
        <div className="flex flex-col justify-between bg-gray-900 p-6 rounded-lg shadow-sm text-white">
          <div className="flex justify-between space-y-3">
            <h3 className="text-lg font-medium border-l-emerald-600">Initial Investment</h3>
            <div className="flex flex-col text-green-600">
              <span className="text-sm">↑+15%</span>
              <span className="text-xs">Inception</span>
            </div>
          </div>
          <div className="mt-3">
            <p className="text-2xl font-semibold">₹5,00,000</p>
          </div>
        </div>

        {/* Best Performing Scheme */}
        <div className="flex flex-col justify-between bg-gray-900 p-6 rounded-lg shadow-sm text-white">
          <div className="flex justify-between space-y-3">
            <h3 className="text-lg font-medium border-l-emerald-600">Best Performing Scheme</h3>
            <div className="flex flex-col text-green-600">
              <span className="text-sm">+19%</span>
              <span className="text-xs">Inception</span>
            </div>
          </div>
          <div>
            <p className="text-2xl font-semibold">ICICI Prudential</p>
          </div>
        </div>

        {/* Worst Performing Scheme */}
        <div className="flex flex-col justify-between bg-gray-900 p-6 rounded-lg shadow-sm text-white">
          <div className="flex justify-between space-y-3">
            <h3 className="text-lg font-medium border-l-emerald-600">Worst Performing Scheme</h3>
            <div className="flex flex-col text-red-600">
              <span className="text-sm">-5%</span>
              <span className="text-xs">Inception</span>
            </div>
          </div>
          <div>
            <p className="text-2xl font-semibold">Axis Flexi</p>
          </div>
        </div>
      </div>
    )}
  </div>
)