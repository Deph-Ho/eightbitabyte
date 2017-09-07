import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/Home';


ReactDOM.render(
  <div>
  { /*Navigation Tab*/ }
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <NavLink to="/home" activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink exact={true} to="/" activeClassName="active">App</NavLink>
        </li>
      </ul>
       <Route path="/home" component={Home}/>
       <Route exact path="/" component={App}/>
    </div>
  </BrowserRouter>

  { /*Rest of applicaton*/ }

  </div>,
  document.getElementById('root')
);

registerServiceWorker();
