function MovieCard({movie}) {

    function handleLike() {
        console.log('Like button clicked');
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title} />
                <div className="movie-overlay"> 
                    <button className="like-btn" onClick={handleLike}>♥</button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.dateReleased}</p>
            </div>
        </div>
    );
}

export default MovieCard;
