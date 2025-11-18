import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import Favorites from './pages/Favorites'
import NavBar from './componentes/NavBar'
import { MovieProvider } from './contexts/MovieContext'
import './css/App.css'


function App() {

  return (
    // MovieProvider envuelve toda la app para que todos los componentes tengan acceso al Context
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/favorites" element={<Favorites />}/>
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App
