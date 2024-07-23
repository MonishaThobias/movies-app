import React, { Component } from "react";
import {getMovies} from './Services/fakeMovieService'

class Movie extends Component{
state = {movies : getMovies()}
  //this.reset=this.reset.bind(this);

  

handleDelete = (movie) =>{
//console.log(this.state.movies)
//console.log(movie)
const movies =this.state.movies.filter( m =>m._id !== movie._id)
console.log(movies)
this.setState({movies:movies})
}

reset(){
  window.location.reload(false);
}

render(){
const {length:count} = this.state.movies
if(count===0)
   // if(this.state.movies.length===0)
    return (
<p className="mt-3">There is no movies in the database. &nbsp;
<button className="btn btn-primary mb-2" onClick={this.reset}>Reset</button>         
</p>
);

    return (
        <React.Fragment>
            <div className="table-responsive mt-2 pt-2">
     <p className="mt-3"> Showing <mark> {count} </mark> movies in the  database.</p>  
     <button className="btn btn-primary mb-2" onClick={this.reset}>Reset</button>         
            <table className="table table-bordered table-striped table-hover">
            <thead>
            <tr>
      <th>Title</th>
      <th>Genere</th>
      <th>Stock</th>
      <th>Rate</th>
      <th>Action</th>
    </tr>
  </thead>
  
  <tbody>
  {
    this.state.movies.map(movie => (
        <tr key={movie._id}>
    <td>{movie.title}</td>
    <td>{movie.genre.name}</td>
  <td>{movie.numberInStock}</td>
  <td>{movie.dailyRentalRate}</td>
 <td>
    <button className="btn btn-danger btn-sm" onClick={() => this.handleDelete(movie) }>Delete</button>
 </td>
  </tr>
  )) }
  </tbody>
</table>
            </div>
        </React.Fragment>
    )
}

}

export default Movie;