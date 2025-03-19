export default function Sidebar() {
  return (
    <div className="h-screen bg-gray-900 text-white w-60">
      {/* Sidebar Items */}
      <div className="flex flex-col space-y-4 p-4">
        <div className="hover:bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-3 transition cursor-pointer">
          PHA
        </div>

        <div className="hover:bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-3 transition cursor-pointer">
          Funds Analysis
        </div>

        <div className="hover:bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-3 transition cursor-pointer">
          Holdings
        </div>

        <div className="hover:bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-3 transition cursor-pointer">
          Transactions
        </div>
      </div>
    </div>
  );
}
