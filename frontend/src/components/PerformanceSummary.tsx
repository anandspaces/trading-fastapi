import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, ReferenceLine } from 'recharts';

const performanceData = [
  { date: 'Jan', nav: 100 },
  { date: 'Feb', nav: 105 },
  { date: 'Mar', nav: 115 },
  { date: 'Apr', nav: 112 },
  { date: 'May', nav: 120 },
  { date: 'Jun', nav: 125 },
];

export default function PerformanceGraph() {
  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">NAV Performance</h2>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
            1M
          </button>
          <button className="px-3 py-1 text-sm rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
            6M
          </button>
          <button className="px-3 py-1 text-sm rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors">
            1Y
          </button>
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={performanceData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <defs>
              <linearGradient id="colorNav" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            
            <CartesianGrid strokeDasharray="3 3" className="stroke-gray-700" />
            
            <XAxis 
              dataKey="date" 
              tick={{ fill: '#9CA3AF' }}
              tickLine={{ stroke: '#4B5563' }}
            />
            
            <YAxis 
              orientation="right"
              tick={{ fill: '#9CA3AF' }}
              tickLine={{ stroke: '#4B5563' }}
              className="text-gray-300"
            />
            
            <Tooltip
              contentStyle={{
                backgroundColor: '#1F2937',
                border: '1px solid #374151',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
              itemStyle={{ color: '#E5E7EB' }}
            />
            
            <Line
              type="monotone"
              dataKey="nav"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={false}
              activeDot={{
                r: 6,
                fill: '#3b82f6',
                stroke: '#1e3a8a',
                strokeWidth: 2
              }}
            />
            
            <ReferenceLine 
              y={125} 
              stroke="#10b981" 
              strokeDasharray="4 4"
              label={{
                value: 'Current NAV',
                fill: '#10b981',
                position: 'right',
                dy: -10
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}