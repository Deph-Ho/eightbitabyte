import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './css/App.css';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import AboutMe  from './components/AboutMe';
import { Button } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ul className="slideshow">
          <li>
            <span>Flower</span>
          </li>
          <li>
            <span>Star</span>
          </li>
          <li>
            <span>Bulb Flower</span>
          </li>
          <li>
            <span>Computer</span>
          </li>
          <li>
            <span>Bokeh</span>
          </li>
          <li>
            <span>Coffee</span>
          </li>
        </ul>

        {/* <div id="app-scroll" className="App-header">
            <img src={logo} className="App-logo" alt="logo" /> 
          <h1 id="App-name">Dephanie Ho</h1>
        </div> 
        <img src={FlowerImage} class="img-fluid" alt="Flower background"></img> */}
        {/*<BackgroundSlideshow images={[ flowerImg, starImg, bulbFlowerImg, codingImg ]} /> */}
        <Header/>

      </div>
    );
  }
}
export default App;
