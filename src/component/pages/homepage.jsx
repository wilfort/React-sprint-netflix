import React, { Component } from 'react';
import logo from '../../assets/image/logo.svg';
import {
  Link
} from 'react-router-dom';
class HomePage extends Component {
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload Registeur Registeur Registeur.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
          <div>
            <from>
              <Link to="/showCard">
                  <button className="home-button">
                      Afficher
                  </button>
              </Link>
              </from>
              </div>
        </div>
      );
    }
  }
  
  export default HomePage;
  