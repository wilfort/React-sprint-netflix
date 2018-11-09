import React, { Component } from 'react';
import logo from '../../assets/image/logo.svg';
import {
  Link
} from 'react-router-dom';
class HomePage extends Component {
    render() {
      return (
        <div className="App">
              Bienvenue dans notre atelier netflix
              <Link to="/showCard" className="home-button">           
              Montre moi la magie
              </Link>
        </div>
      );
    }
  }
  
  export default HomePage;
  