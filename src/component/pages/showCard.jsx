import React, { Component } from 'react';
import myData from '../../assets/json/movie.json';
import Header from './Header'
class ShowCard extends Component {
    constructor(props) {
        // Ne pas oublier d'appeler le constructeur père ! (Obligatoire)
        super(props);
        // On définit le state de notre component que l'on hérite de la classe "Component"
        // Cela remplace la fonction "getInitialState"
        this.state = {
            searchStringUser: "",
            movies: myData.movie
        
        }}
        handleChange(e){
            this.setState({searchStringUser: e.target.value});
        }
    render() {
        // const movieFilterV2 = this.state.movies.filter((searchText) => {
        //     let search="";
        //     // eslint-disable-next-line array-callback-return
        //     let test = searchText.map((elem)=>{
        //         search+=" "+elem;
        //         console.log(elem);
        //         return search;
        //      })
        //      // let search=searchText.map((val)=>{return val})
        //      console.log(search);
 
 
        //      let searche = searchText.Actors + " " + searchText.Writer + " " + searchText.Title+ " " + searchText.Plot+ " " + searchText.Year;
        //      return searche.match(this.state.searchStringUser);
        //  })
        const movieFilter = this.state.movies.filter((searchText) => {
            let search = searchText.Actors + " " + searchText.Title+ " " + searchText.Plot+ " " + searchText.Year;
            return search.match(this.state.searchStringUser);
        })
      return (
        <div>
            <Header seaStrUser={this.state.searchStringUser} Funct={this.handleChange.bind(this)}/>
            
            <div className="movie-container">
                {
                    movieFilter.map((film)=>{
                        return (
                            <div className="wrapper-card">
                                <img src={film.Poster} alt=""/>
                                <h3>{film.Title}</h3>
                                <h4>{film.Year}</h4>
                                <p>{film.Plot}</p>
                                <p>{film.Actors}</p>
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