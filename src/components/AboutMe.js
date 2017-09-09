import React, { Component } from 'react';

export class AboutMe extends Component {
  render() {
    return (
      <div>
        <h1 id="header-title" className="text-center">About Me</h1>

        <div id="about-des" className="col-md-3">{/* ;nbsp */}</div>
        <div id="about-des" className="col-md-6">
          <p>
            Hello! My name is Dephanie Ho (pronounced Daphne). I am currently a junior
            at University of California, San Diego studying Mathematics and Computer Science.
            <br/><br/>
            Growing up with a dad and two brothers who love building and talking about computers,
            I also grew interested in software development.  After taking an iOS mobile development
            class, I am currently interested in web development and its vast technologies.
            <br/><br/>
            In my spare time, I love hanging out with my german shepherd, Brownie, and going to KOTX dance practices.
            I occasionally game and I can't wait for The Last Of Us 2 to come out. I'm also currently
            being forced to watch Breaking Bad, which I admit MAY be getting interesting but I will
            never tell my brother that. (Shhhh)
          </p>
        </div>
        <div id="about-des" className = "col-md-3">{/* ;nbsp */}</div>
      </div>
    )
  }
}
