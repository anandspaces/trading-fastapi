import { useState } from 'react';
import { useMutualFunds } from '../hooks/useMutualFunds';
import { InvestmentOverview } from './InvestmentOverview';
import { AllocationDetails } from './AllocationDetails';
import { OverlapAnalysis } from './OverlapAnalysis';
import { Loader } from './Loader';
import Sidebar from './Sidebar';

export default function Dashboard() {
  const { data, isLoading, error } = useMutualFunds();
  const [activeTab, setActiveTab] = useState<'performance' | 'portfolio'>('performance');

  if (isLoading) return <Loader />;
  if (error) return (
    <div className="flex h-screen justify-center items-center bg-gray-50">
      <div className="bg-red-100 text-red-600 border border-red-300 p-4 rounded-md shadow-md">
        <p className="text-lg font-semibold">Error:</p>
        <p>{error.message}</p>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-800 text-white">
      {/* Sidebar */}
      <div className="w-60">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 min-h-screen p-6 md:p-8">
        <h1 className="text-4xl font-bold mb-8">Good Morning, Yashna!</h1>
        <h4 className="font-bold text-gray-300 mb-8">Evaluate Your Investment Performance</h4>

        {/* Tab Navigation */}
        <nav className="flex border-b border-gray-700 mb-6">
          <button
            onClick={() => setActiveTab('performance')}
            className={`px-6 py-3 text-lg font-medium transition ${
              activeTab === 'performance' ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            Performance Metrics
          </button>

          <button
            onClick={() => setActiveTab('portfolio')}
            className={`px-6 py-3 text-lg font-medium transition ${
              activeTab === 'portfolio' ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            Portfolio Composition
          </button>
        </nav>

        {/* Dynamic Content Based on Active Tab */}
        <div className="space-y-8">
          {activeTab === 'performance' ? (
            <>
              <InvestmentOverview data={data?.overview} />
              <div className="bg-gray-900 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Performance Graph</h2>
                {/* Placeholder for Graph */}
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400">Graph Component Placeholder</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="bg-gray-900 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Portfolio Composition</h2>
                <div className="space-y-4">
                  <AllocationDetails data={data?.allocations} />
                  <OverlapAnalysis data={data?.overlaps} />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
