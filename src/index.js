import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';


const scrollToHome = () => {
  var homeScroll = document.getElementById('app-scroll');
  homeScroll.scrollIntoView({block: "start", inline: "nearest",behavior: 'smooth'});
}

const scrollToAboutMe = () => {
    var aboutMe = document.getElementById('about-scroll');
    aboutMe.scrollIntoView({block: "start", inline: "nearest",behavior: 'smooth'});
}

const scrollToPortfolio = () => {
    var portfolioScroll = document.getElementById('portfolio-title');
    portfolioScroll.scrollIntoView({block: "start", inline: "nearest",behavior: 'smooth'});
    // now account for fixed header

}

ReactDOM.render(
  <div>
  { /*Navigation Tab*/ }
  <BrowserRouter>
    <div>
      <ul className="nav nav-tabs navbar-fixed-top">
        <li onClick={scrollToHome} className="nav-item nav-btn btn-margin css-animator">
          Home
        </li>
        <li onClick={scrollToAboutMe} className="nav-item nav-btn btn-margin css-animator">
          About Me
        </li>
        <li onClick={scrollToPortfolio} className ="nav-item nav-btn btn-margin css-animator">
          {/*<NavLink to="/Portfolio" activeClassName="active">Portfolio</NavLink> */}
          Portfolio
        </li>
      </ul>
       <Route exact path="/" component={App}/>
       <Route path="/AboutMe" component={AboutMe}/>
       <Route path="/Portfolio" component={Portfolio}/>
    </div>
  </BrowserRouter>
  </div>,
  document.getElementById('root')
);

registerServiceWorker();
