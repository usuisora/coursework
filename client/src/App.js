import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import {MyProvider, MyContext} from './Provider'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <MyProvider>
          hello
        </MyProvider>
        </div>
      </Router>
     
    );
  }
}

export default App;
