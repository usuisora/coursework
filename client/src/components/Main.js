import React from 'react'
import {Typography} from '@material-ui/core';
import classNames from 'classnames'
import Container from './products/Container'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Main({classes,open}) {
  return (
    <main className={classNames(classes.content, { [classes.contentShift]: open, })}>
           <div className={classes.drawerHeader} />
           <Route path="/" exact component={Container} />
         
    </main>
  )
}

export default (Main)
