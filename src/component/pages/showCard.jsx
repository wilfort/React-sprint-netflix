import React, { Component } from 'react';
import myData from '../../assets/json/movie.json';

class ShowCard extends Component {
    render() {
      return (
            <div className="App">
                <div className="search">
                {
                        myData.movie.map(function(film){
                            return (
                            
                                <div className="wrapper-card">
                                    <img src={film.Poster} alt=""/>
                                    
                                    <h3>{film.Title}</h3>
                                    <p>{film.Plot}</p>
                                </div>
                            
                            );
                        })
                    }
                </div>
            </div>
      );
    }
  }
  
  export default ShowCard;