import React from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
function ProdHeaders() {
  return (
   <TableHead>
          <TableRow>
        <TableCell align="right">CATEGORY</TableCell>
            <TableCell align="right">MARK</TableCell>
            <TableCell align="right">MODEL</TableCell>
            <TableCell align="right">COLOR</TableCell>
            <TableCell align="right">COUNT</TableCell>
            <TableCell align="right">PRICE (uah)</TableCell>
          </TableRow>
        </TableHead>
  )
}

export default ProdHeaders
