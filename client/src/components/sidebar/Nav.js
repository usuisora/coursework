

import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import {Toolbar,Typography, Button} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames'


const Burger = ({classes,setOpen,open}) =>{
  return(
     <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={()=>setOpen(true)}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
  )
}

function Nav({classes,open,setOpen}) {
  return (
    <AppBar
          position="fixed"
          className= {classNames( classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
           <Burger classes={classes}  setOpen = {setOpen} open = {open}/>
            <Typography variant="h6" color="inherit" noWrap style = {{display: 'flex', flex : 1, fontWeight : 500}} >
               Basical Client App
            </Typography>
            <Button className = {classes.menuButton}  color="inherit">
              Login
            </Button>
          </Toolbar>
        </AppBar>
  )
}

export default  (Nav)
