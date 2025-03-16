import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import { Card } from '../../ui/Card'
import { Sector } from '../../../types/types'

const COLORS = ['#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe']

interface Props {
  data: Sector[]
}

export const SectorAllocation = ({ data }: Props) => (
  <Card>
    <h3 className="font-medium mb-4">Sector Allocation</h3>
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="percentage"
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  </Card>
)