import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

export class Portfolio extends Component {
  render() {
    return(
      <div>
        <div className="col-md-2">{/* ;nbsp */}</div>
        <div className="col-md-8">
          <h1 id="portfolio-title">
            Portfolio
            <FontAwesome name="folder-open-o" size="lg" id="folder-logo"/>
          </h1>

          {/* First Row */}
          <div className="portfolio-image">
            <h2 id="left-title">
              Nudge
              <FontAwesome name="hand-o-up" size="lg" id="font-padding"/>
            </h2>

            <h2 id="right-title">
              Instaphoto
              <FontAwesome name="instagram" size="lg" id="font-padding"/>
            </h2>

            <a href="https://www.youtube.com/watch?v=gGd28bofXXA&t=3s" target = "_blank">
              <img className="left-img" id="nudge-img"
                src="https://camo.githubusercontent.com/529822d63d730bda775da09ed82e031d7ae8d314/687474703a2f2f692e696d6775722e636f6d2f4f4d584f36474d2e676966"
                alt="Youtube link to walkthrough of Nudge"/>
            </a>

            <a href="https://github.com/Deph-Ho/Instaphoto" target = "_blank">
              <img className="right-img"
                src="https://camo.githubusercontent.com/3d66a972223d3431a335670676e5df20e56dbb9b/687474703a2f2f692e696d6775722e636f6d2f567231347872422e676966"
                alt="Github Link to Instaphoto"/>
            </a>
          </div>

          {/* Second Row */}
          <div className="portfolio-image">
            <h2 id="left-title">
              BlueJayChirp
              <FontAwesome name="twitter" size="lg" id="font-padding"/>
            </h2>

            <h2 id="right-title">
              Foodie-Yelp
              <FontAwesome name="yelp" size="lg" id="font-padding"/>
            </h2>
            <a href = "https://github.com/Deph-Ho/Twitter" target = "_blank">
              <img className="left-img"
                src="https://camo.githubusercontent.com/30d13997becad71b0a1908bc903ce3acf1d2fa0f/687474703a2f2f692e696d6775722e636f6d2f327445376a6b512e676966"
                alt="Github Link to BirdJayChirp"/>
            </a>

            <a href = "https://github.com/Deph-Ho/Foodie-Yelp" target = "_blank">
             <img className="right-img"
               src="https://camo.githubusercontent.com/95346f6c2c44aa886354b959aa948f29547c97ea/687474703a2f2f692e696d6775722e636f6d2f436c524b6269562e676966"
               alt="Github Link to Foodie-Yelp"/>
            </a>
          </div>
        </div>
        <div className="col-md-2">{/* ;nbsp */}</div>
      </div>
    );
  }
}
export default Portfolio;
