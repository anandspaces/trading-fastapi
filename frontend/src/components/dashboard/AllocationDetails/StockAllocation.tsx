import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { Card } from '../../ui/Card'
import { Stock } from '../../../types/types'

interface Props {
  data: Stock[]
}

export const StockAllocation = ({ data }: Props) => (
  <Card>
    <h3 className="font-medium mb-4">Stock Allocation</h3>
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical">
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" width={100} />
          <Tooltip />
          <Bar dataKey="percentage" fill="#3b82f6" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </Card>
)