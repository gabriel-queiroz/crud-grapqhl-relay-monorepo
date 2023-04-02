import React, { FC } from 'react'
import { TableRow, Td, Th, Table } from './Table.styles'
import { ColumnType, SourceItem } from './Table.types'

export type DataTableType = {
  columns: ColumnType[]
  datasource: SourceItem[]
}

export const DataTable: FC<DataTableType> = ({ columns, datasource }) => {
  return (
    <Table>
      <thead>
        <tr>
          {columns.map(col => (
            <Th key={col.index}>{col.label}</Th>
          ))}
        </tr>
      </thead>
      <tbody>
        {datasource.map(dataItem => (
          <TableRow key={dataItem.id}>
            {columns.map(column => (
              <Td key={column.index + dataItem.id}>{dataItem[column.index]}</Td>
            ))}
          </TableRow>
        ))}
      </tbody>
    </Table>
  )
}
