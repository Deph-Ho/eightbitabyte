import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { AboutMe } from './components/AboutMe';
import { Portfolio } from './components/Portfolio';


ReactDOM.render(
  <div>
  { /*Navigation Tab*/ }
  <BrowserRouter>
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item nav-btn css-animator">
          <NavLink to="/Home" activeClassName="active">Home</NavLink>
        </li>
        <li className="nav-item nav-btn css-animator">
          <NavLink to="/AboutMe" activeClassName="active">About Me</NavLink>
        </li>
        <li className ="nav-item nav-btn css-animator">
          <NavLink to="/Portfolio" activeClassName="active">Portfolio</NavLink>
        </li>
      </ul>
       <Route exact path="/Home" component={App}/>
       <Route path="/AboutMe" component={AboutMe}/>
       <Route path="/Portfolio" component={Portfolio}/>
    </div>
  </BrowserRouter>
  </div>,
  document.getElementById('root')
);

registerServiceWorker();
