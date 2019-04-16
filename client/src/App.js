import React, { Component } from 'react';
import './App.css';
import {theme} from './theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Sidebar from './components/sidebar/Sidebar';
import {MyProvider, MyContext} from './Provider'
class App extends Component {
  render() {
    return (
      <div className="App">
      <MyProvider>
        <MuiThemeProvider theme ={theme}>
        <Sidebar/>
        
        </MuiThemeProvider>
      </MyProvider>
      </div>
    );
  }
}

export default App;
