interface DataTableProps {
  headers: string[]
  rows: Array<Array<string | number>>
}

export const DataTable = ({ headers, rows }: DataTableProps) => (
  <div className="overflow-x-auto">
    <table className="w-full">
      <thead>
        <tr className="border-b">
          {headers.map((header) => (
            <th key={header} className="text-left p-3">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-b even:bg-gray-50">
            {row.map((cell, j) => (
              <td key={j} className="p-3">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)