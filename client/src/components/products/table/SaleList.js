import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Table, Paper} from '@material-ui/core';
import ProdHeaders from './ProdHeaders'
import ProdBody from './ProdBody'
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});


const SaleList = ({classes}) =>{
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <ProdHeaders/>
        <ProdBody/>
      </Table>
    </Paper>
  );
}


export default withStyles(styles)(SaleList);