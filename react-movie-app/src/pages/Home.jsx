import MovieCard from "../componentes/MovieCard";
import '../css/Home.css'
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies} from "../services/api";

function Home() {
    // Estados: variables que guardan información que puede cambiar
    const [searchQuery, setSearchQuery] = useState(""); // Texto que el usuario escribe
    const [movies, setMovies] = useState([]); // Lista de películas a mostrar
    const [error, setError] = useState(null); // Mensaje de error si algo falla
    const [loading, setLoading] = useState(true) // Indica si está cargando datos

    // Se ejecuta una sola vez cuando la página carga
    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                // Pide las películas populares a la API
                const popularMovies = await getPopularMovies();
                // Guarda las películas en el estado
                setMovies(popularMovies);
            } catch (err) {
                // Si falla, muestra un error
                setError("Error al cargar las películas");
                console.error(err);
            } finally {
                // Siempre deja de mostrar "cargando"
                setLoading(false);
            }
        };

        loadPopularMovies();
    }, []); // Array vacío = solo se ejecuta al inicio

    // Se ejecuta cuando el usuario envía el formulario de búsqueda
    const handleSearch = async (e) => {
        e.preventDefault(); // Evita que la página se recargue
        
        // Si no hay texto, no hace nada
        if (!searchQuery.trim()) return
        // Si ya está buscando, no busca de nuevo
        if (loading) return
    
        setLoading(true) // Muestra "cargando..."
        try {
            // Busca películas con el texto ingresado
            const searchResults = await searchMovies(searchQuery)
            // Guarda los resultados
            setMovies(searchResults)
            setError(null) // Limpia errores anteriores
        } catch (err) {
            // Si falla, muestra un error
            console.log(err)
            setError("Fallo al buscar peliculas...")
        } finally {
            // Siempre deja de mostrar "cargando"
            setLoading(false)
        }
      };

    return (
        <div className="home">
            {/* Formulario de búsqueda */}
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search for a movie" 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)} 
                    className="search-input" 
                />
                <button type="submit" className="search-btn">Search</button>
            </form>
            
            {/* Muestra error si hay uno */}
            {error && <div className="error-message">{error}</div>}
            
            {/* Si está cargando, muestra mensaje. Si no, muestra las películas */}
            {loading ? (
                <div className="loading">Cargando películas...</div>
            ) : (
                <div className="movies-grid">
                    {/* Si no hay películas, muestra mensaje. Si hay, las muestra */}
                    {movies.length === 0 ? (
                        <p>No se encontraron películas</p>
                    ) : (
                        movies.map((movie) => (
                            <MovieCard movie={movie} key={movie.id} />
                        ))
                    )}
                </div>
            )}
        </div>
    )
}

export default Home;