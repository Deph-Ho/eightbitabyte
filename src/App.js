import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './css/App.css';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import { Home } from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 id="App-name">Dephanie Ho</h2>
        </div>
        <Header />
        <Portfolio />
      </div>
    );
  }
}
export default App;
