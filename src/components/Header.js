import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Portfolio from './Portfolio';
import AboutMe from './AboutMe';


class Header extends Component {

  render() {
    return(
      <div>
        <div id="app-scroll" className="row col-md-12">
          <div id="header-title">
            <h1 id="header-name"> Dephanie Ho </h1>
            <h3 id="under-header-name">
              Mathematics - Computer Science student at
              University of California, San Diego
            </h3>
          </div>

          {/* German Shepherd icon by Icons8 */}
          <img src="https://png.icons8.com/german-shepherd/color/96"
            alt= "German Shepherd" id="dog-icon"/>

          <div id="buttons" className="text-center">
            {/* Github Button */}
            <a href="https://github.com/Deph-Ho" className="button"
              target = "_blank" alt="Check out my GitHub!">
              <FontAwesome name="github" size="2x"/>
            </a>

            {/* LinkedIn Button */}
            <a href="https://www.linkedin.com/in/dephanie-ho" className="button"
              target = "_blank" alt="Check out my LinkedIn!">
              <FontAwesome name="linkedin" size="2x"/>
            </a>
          </div>
        </div>

        {/* Description */}
        <div className="row col-md-12">
          {/* <div id="header-des" className= "col-md-3">{/* ;nbsp </div>
          <div id="header-des" className="col-md-6 textcenter">
            <h3>
              Fourth year student and junior software developer seeking
              opportunities to develop professional skills and provide a strong
              contribution to organization goals.
            </h3>
          </div>
          <div id="header-des" className = "col-md-3">{/* ;nbsp </div>
          */}
          <h3 id="header-des">
              Fourth year student and junior software developer seeking
              opportunities to develop professional skills and provide a strong
              contribution to organization goals.
          </h3>
        </div>
        <div className="row">
          <Portfolio />
        </div>
        <div className="row">
          <AboutMe />
        </div>
      </div>
    );
  }
}
export default Header;
