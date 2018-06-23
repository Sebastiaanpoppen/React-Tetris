import React, { Component } from 'react';
import logo from './logo.svg';
import AppHeader from './components/app-header'
import AppBody from './components/app-body'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <AppHeader />
        <AppBody />
      </div>
    );
    }
}

export default App;
