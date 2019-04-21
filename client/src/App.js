import React, { Component } from 'react';
import './App.css';
import {theme} from './theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Sidebar from './components/sidebar/Sidebar';
import {MyProvider, MyContext} from './Provider'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <MyProvider>
          <MuiThemeProvider theme ={theme}>
          <Sidebar/>
          
          </MuiThemeProvider>
        </MyProvider>
        </div>
      </Router>
     
    );
  }
}

export default App;
