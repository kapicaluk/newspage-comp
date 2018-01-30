import React, { Component } from "react";
import "./App.css";
import heroImg from "./assets/hero-image.jpg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="header-logo">
            <div id="square" />
            <h1 className="App-title">Investopedia</h1>
          </div>
          <h5 className="date">Monday, January 31st, 2018</h5>
        </header>
        <nav>
          <ul className="navigation">
            <li className="nav-link">Link</li>
            <li className="nav-link">Link</li>
            <li className="nav-link">Link</li>
            <li className="nav-link">Link</li>
            <li className="nav-link">Link</li>
            <li className="nav-link">Link</li>
            <li className="nav-link">Link</li>
            <li className="nav-link">Link</li>
            <li className="nav-link">Link</li>
            <li className="nav-link">Link</li>
          </ul>
          <input className="search" placeholder="search" />
        </nav>
        <hr className="nav-break" />
        <div id="hero">
          <div className="hero-news">
            <h1>This is serious</h1>
            <img className="hero-image" src={heroImg} />
            <div className="hero-news-pinned-wrap">
              <ul className="hero-news-pinned">
                <li>
                  In hac habitasse platea dictumst. Vivamus adipiscing fermentum
                  quam volutpat aliquam.
                </li>
                <li>
                  In hac habitasse platea dictumst. Vivamus adipiscing fermentum
                  quam volutpat aliquam.
                </li>
                <li>
                  In hac habitasse platea dictumst. Vivamus adipiscing fermentum
                  quam volutpat aliquam.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
