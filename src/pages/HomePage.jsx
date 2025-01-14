import { useState, useEffect } from "react";

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
    <>
      <h1>Homepage</h1>

      {movies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </>
  );
}
