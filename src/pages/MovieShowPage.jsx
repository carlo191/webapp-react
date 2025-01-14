import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../assets/css/index.css";

export default function MovieShowPage() {
  const { id: movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/movies/${movieId}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, [movieId]);

  return (
    <div className="center-text">
      <h1 className="p-3">MOVIE DETAILS:</h1>
      {movie ? (
        <div>
          <h2 className="text-center">{movie.title}</h2>

          <ul>
            <li>{movie.title}</li>
            <li> {movie.director}</li>
            <li> {movie.genre}</li>
            <li> {movie.relase_year}</li>
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
