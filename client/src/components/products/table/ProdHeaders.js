import React from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
function ProdHeaders() {
  return (
   <TableHead>
          <TableRow>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Model</TableCell>
            <TableCell align="right">Color</TableCell>
            <TableCell align="right">Quantity (itm)</TableCell>
            <TableCell align="right">Price (uah)</TableCell>
          </TableRow>
        </TableHead>
  )
}

export default ProdHeaders
