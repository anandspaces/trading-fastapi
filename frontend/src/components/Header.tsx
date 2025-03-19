export const Header = () => (
  <header className="bg-gray-900 text-white shadow-sm">
    <nav className="max-w-7xl mx-auto px-8 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">
          Mutual Fund Dashboard
        </h1>
        <div className="space-x-6">
          <a href="#" className="hover:text-gray-200">Overview</a>
          <a href="#" className="hover:text-gray-200">Analysis</a>
          <a href="#" className="hover:text-gray-200">Reports</a>
        </div>
      </div>
    </nav>
  </header>
)