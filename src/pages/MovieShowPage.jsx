import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../assets/css/index.css";
import ReviewList from "../components/reviews/ReviewList";

export default function MovieShowPage() {
  const { id: movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/movies/${movieId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovie(data);
      });
  }, [movieId]);

  return (
    <div className="center-text">
      <h1 className="p-3">MOVIE DETAILS:</h1>
      {movie ? (
        <div>
          <h2 className="text-center">{movie.title}</h2>

          <ul className="p-2">
            <li>{movie.title}</li>
            <li>{movie.director}</li>
            <li>{movie.genre}</li>
            <li>{movie.release_year}</li>
            <li>{movie.abstract}</li>
          </ul>
          <div className="row">
            <ReviewList reviews={movie.reviews}/>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}