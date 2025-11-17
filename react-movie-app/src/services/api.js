// Credenciales para acceder a la API de películas
const API_KEY = "7fac6ef922d194b7d7ee8bed99d37005";
const API_URL = "https://api.themoviedb.org/3"

// Obtiene las películas más populares
export const getPopularMovies = async () => {
    // Hace una petición a la API
    const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`);
    // Convierte la respuesta a formato JSON
    const data = await response.json()
    // Devuelve solo la lista de películas
    return data.results
};

// Busca películas por nombre
export const searchMovies = async (query) => {
    // Hace una petición buscando películas con el texto ingresado
    const response = await fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    // Convierte la respuesta a formato JSON
    const data = await response.json()
    // Devuelve solo la lista de películas encontradas
    return data.results
};