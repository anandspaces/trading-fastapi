import { BarChart, Bar, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { Card } from '../../ui/Card'
import { MarketCap } from '../../../types/types'

const COLORS = ['#3b82f6', '#60a5fa', '#93c5fd']

interface Props {
  data: MarketCap[]
}

export const MarketCapAllocation = ({ data }: Props) => (
  <Card>
    <h3 className="font-medium mb-4">Market Cap Allocation</h3>
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="type" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="percentage">
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  </Card>
)