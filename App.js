import React, { useState } from 'react'
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';

import {moviedata} from "./data"
import Movie from './components/Movie';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
const App = () => {
  const [movies] = useState(moviedata)

  
  
  return (
    <div>
    
      
     
      <BrowserRouter>
        <NavBar/>
        
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/movies" render={()=> <MovieList/>}/>
          <Route path="/movie/:id" render={(props)=> <Movie {...props} movies={movies}/>}/>
        </Switch>
      </BrowserRouter>
    
    </div>
  )
}

export default App
