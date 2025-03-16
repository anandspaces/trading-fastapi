export const Header = () => (
  <header className="bg-white shadow-sm">
    <nav className="max-w-7xl mx-auto px-8 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">
          Mutual Fund Dashboard
        </h1>
        <div className="space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900">Overview</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Analysis</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Reports</a>
        </div>
      </div>
    </nav>
  </header>
)