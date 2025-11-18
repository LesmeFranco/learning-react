import { createContext, useState, useContext, useEffect } from "react";

// Crea el Context: es como una "caja" donde guardamos datos para compartir entre componentes
const MovieContext = createContext()

// Hook personalizado: función que facilita usar el Context en cualquier componente
export const useMovieContext = () => useContext(MovieContext)

// Provider: componente que "envuelve" otros componentes y les da acceso a los datos
export const MovieProvider = ({children}) => {

    const [favorites, setFavorites] = useState([])

    useEffect (() => {
        const storedFavs = localStorage.getItem("favorites")

        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])

    useEffect (() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}