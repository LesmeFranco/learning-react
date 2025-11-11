import MovieCard from "../componentes/MovieCard";
import { useState } from "react";

function Home() {

    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "The Dark Knight", dateReleased: "2008"},
        {id: 2, title: "Matrix", dateReleased: "1984"},
        {id: 3, title: "Interstellar", dateReleased: "2014"},
        {id: 4, title: "Inception", dateReleased: "2010"},
        {id: 5, title: "The Lord of the Rings", dateReleased: "2001"}
    ]
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="home">
            <form onSubmit={handleSubmit} className="search-form">
                <input type="text" placeholder="Search for a movie" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="search-input" />
                <button type="submit" className="search-btn">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map((movie) => (
                    movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>

    )
}

export default Home;