import React from 'react'
import {Typography} from '@material-ui/core';
import classNames from 'classnames'
import Container from './products/Container'
function Main({classes,open}) {
  return (
    <main className={classNames(classes.content, { [classes.contentShift]: open, })}>
           <div className={classes.drawerHeader} />
          <Container/>
    </main>
  )
}

export default (Main)
