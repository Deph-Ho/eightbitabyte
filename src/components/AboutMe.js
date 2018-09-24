import React, { Component } from 'react';
import aboutMePic from '../assets/JA84.jpg';
export default class AboutMe extends Component {

  render() {
    return (
      <div>
        <div id="about-des" className="col-md-3">{/* ;nbsp */}</div>
        <div id="about-des" className="col-md-6">
        <div id="about-scroll">
          <h1 id="about-header-title" className="text-center">About Me</h1>
          <img className="img-circle" src={aboutMePic} />
        </div>
        
        <p id="aboutMe-des" className="side-padding10">
          Hello! My name is Dephanie Ho (pronounced Daphne). I am currently a senior
          at University of California, San Diego studying Mathematics and Computer Science.
          <br/><br/>
          Growing up with a dad and two brothers who love building and talking about computers,
          I also grew interested in software development.  After taking an iOS mobile development
          class, I am currently interested in web development and its vast technologies.
          <br/><br/>
        </p>
        </div>
        <div id="about-des" className = "col-md-3">{/* ;nbsp */}</div>
      </div>
    )
  }
}
