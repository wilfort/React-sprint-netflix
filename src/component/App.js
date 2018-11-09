import React, { Component } from 'react';
import '../assets/css/App.css';
import homepage from './pages/homepage';
import showCard from './pages/showCard';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      
        <Router>
          <div>
            <Route exact path="/" component={homepage}/>
            <Route exact path='/accueil' component={homepage} />
            <Route exact path="/showCard" component={showCard}/>
          </div>
        </Router>
      
    );
  }
}

export default App;
