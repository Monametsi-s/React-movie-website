import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

 
    return (
      <div className="favorites">
        <h2>My favorite Movies</h2>
        {favorites.length > 0 ? (
            <div className="movies-grid">
            {favorites.map(
              (movie) => (
                <MovieCard movie={movie} key={movie.id} />
                ))}
          </div>
        ) : (
            <div className="favorites-empty">
                <h2>No favorite movies</h2>
                <p>Start adding movies to your favourites and they will appear here</p>
          </div>
          )}
      </div>
    );
}

export default Favorites;
