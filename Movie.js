import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Movie = ({match, movies, history}) => {
    const selectedMovie = movies.find((movie)=> movie.id == match.params.id)
    
    console.log(match.params.id)

  return (
    <div className="d-flex flex-wrap justify-content-around">
      <Card style={{ width: "18rem"}} className="mb-3 text-center">
        <Card.Img height="350" variant="top" src={selectedMovie.posterUrl} />
        <Card.Body>
          <Card.Title>{selectedMovie.title}</Card.Title>
          <Card.Text>
              {selectedMovie.description} 
              <br/>
              <a href={selectedMovie.trailer}>View Trailer</a>
          </Card.Text>
          
            <Link to={`/`}><Button variant="primary">Go To Home Page</Button></Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Movie;