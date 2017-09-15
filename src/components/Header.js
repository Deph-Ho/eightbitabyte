import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Header extends Component {
  render() {
    return(
      <div>
        <h1 id="header-title">
          Mathematics - Computer Science student at
          University of California, San Diego
        </h1>

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

        {/* Description */}
        <div id="header-des" className= "col-md-3">{/* ;nbsp */}</div>
        <div id="header-des" className="col-md-6 textcenter">
          <h3>
            Third year student and junior software developer seeking
            opportunities to develop professional skills and provide a strong
            contribution to organization goals.
          </h3>
        </div>
        <div id="header-des" className = "col-md-3">{/* ;nbsp */}</div>
      </div>
    );
  }
}
export default Header;
