import React, { Component } from 'react';
import '../assets/css/App.css';
import Home from './pages/homepage';
import Card from './pages/showCard';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={Home}/>
            <Route exact path='/accueil' component={Home} />
            <Route exact path="/showCard" component={Card}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
