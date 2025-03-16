import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { Card } from '../ui/Card'
import { OverlapData } from '../../types/types'

interface Props {
  data?: OverlapData[]
}

export const OverlapAnalysis = ({ data = [] }: Props) => (
  <Card className="mb-12">
    <h2 className="text-xl font-semibold mb-6">Fund Overlap Analysis</h2>
    <div className="h-96">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis 
            dataKey="pair" 
            angle={-45} 
            textAnchor="end"
            tick={{ fontSize: 12 }}
          />
          <YAxis unit="%" />
          <Tooltip />
          <Bar dataKey="overlap" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </Card>
)