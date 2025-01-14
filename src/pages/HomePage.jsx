import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/index.css";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/movies`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  return (
    <div className="center-text">
      <h1 className="p-3">MOVIES:</h1>
      <ul>
        {movies.map((movie) => (
          <Link to={`/movies/` + movie.id} key={movie.id}>
            <li>{movie.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}