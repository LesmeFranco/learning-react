import '../css/MovieCard.css'

// Componente que muestra una tarjeta de película
function MovieCard({movie}) {

    // Función que se ejecuta al hacer clic en el botón de favorito
    function handleLike() {
        console.log('Like button clicked');
    }

    return (
        <div className="movie-card">
            {/* Contenedor de la imagen de la película */}
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="movie-overlay"> 
                    {/* Botón para agregar a favoritos */}
                    <button className="favorite-btn" onClick={handleLike}>♥</button>
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