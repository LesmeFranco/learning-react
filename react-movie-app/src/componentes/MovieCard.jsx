import '../css/MovieCard.css'
import { useMovieContext } from '../contexts/MovieContext';

// Componente que muestra una tarjeta de película
function MovieCard({movie}) {

    const { isFavorite, removeFromFavorites, addToFavorites } = useMovieContext()
    const favorite = isFavorite(movie.id)

    // Función que se ejecuta al hacer clic en el botón de favorito
    function handleLike(e) {
        e.preventDefault()
        if (favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
        
    }

    return (
        <div className="movie-card">
            {/* Contenedor de la imagen de la película */}
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="movie-overlay"> 
                    {/* Botón para agregar a favoritos */}
                    <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={handleLike}>♥</button>
                </div>
            </div>
            {/* Información de la película */}
            <div className="movie-info">
                <h3>{movie.title}</h3>
                {/* Muestra solo el año de la fecha */}
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>
        </div>
    );
}

export default MovieCard;