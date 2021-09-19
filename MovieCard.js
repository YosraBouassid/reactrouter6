
import React from "react";

import { Button, Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const MovieCard = ({ movie}) => {
  const firstExample = {
    size: 40,
    value: movie.rate,
    edit: false,
  };
  
  return (
    <div>
      <Card style={{ width: "18rem" }} className="mb-3">
        <Card.Img variant="top" src={movie.posterUrl} height="400" />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
       
       
          <ReactStars {...firstExample} />
          <Link to={`/movie/${movie.id}`}><Button variant="primary">View Details</Button></Link>
        </Card.Body>
      </Card>

    
    </div>
  );
};

export default MovieCard;