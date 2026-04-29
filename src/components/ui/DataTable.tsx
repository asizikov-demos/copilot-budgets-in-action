import type { ReactNode } from 'react';

type DataTableProps = {
  columns: ReactNode[];
  rows: ReactNode[][];
};

export function DataTable({ columns, rows }: DataTableProps) {
  return (
    <table className="pricing-table">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
