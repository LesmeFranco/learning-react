# 🎬 Movie App

Una aplicación web moderna para buscar y explorar películas, desarrollada con React y Vite. Utiliza la API de The Movie Database (TMDB) para obtener información actualizada sobre películas populares y resultados de búsqueda.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.2-646CFF?logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7.9.6-CA4245?logo=react-router&logoColor=white)

## ✨ Características

- 🔍 **Búsqueda de películas**: Busca películas por título
- 🎯 **Películas populares**: Visualiza las películas más populares al cargar la página
- 💖 **Favoritos**: Agrega películas a tu lista de favoritos (próximamente)
- 📱 **Responsive**: Diseño adaptable a diferentes tamaños de pantalla
- ⚡ **Rápido**: Construido con Vite para una experiencia de desarrollo ultrarrápida

## 🚀 Tecnologías Utilizadas

- **React 19.2.0** - Biblioteca de JavaScript para construir interfaces de usuario
- **Vite 7.2.2** - Herramienta de construcción y desarrollo
- **React Router DOM 7.9.6** - Enrutamiento para aplicaciones React
- **The Movie Database API** - API para obtener datos de películas

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/react-movie-app.git
```

2. Navega al directorio del proyecto:
```bash
cd react-movie-app
```

3. Instala las dependencias:
```bash
npm install
```

## 🎮 Uso

### Desarrollo

Inicia el servidor de desarrollo:
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Construcción para Producción

Genera la versión optimizada para producción:
```bash
npm run build
```

### Vista Previa de Producción

Previsualiza la versión de producción:
```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
react-movie-app/
├── src/
│   ├── componentes/      # Componentes reutilizables
│   │   ├── MovieCard.jsx
│   │   └── NavBar.jsx
│   ├── pages/           # Páginas de la aplicación
│   │   ├── Home.jsx
│   │   └── Favorites.jsx
│   ├── services/        # Servicios y llamadas a API
│   │   └── api.js
│   ├── css/            # Estilos CSS
│   │   ├── App.css
│   │   ├── Home.css
│   │   ├── MovieCard.css
│   │   └── NavBar.css
│   ├── App.jsx         # Componente principal
│   └── main.jsx        # Punto de entrada
├── public/             # Archivos estáticos
├── package.json
└── README.md
```

## 🎯 Funcionalidades Principales

### Página de Inicio
- Carga automática de películas populares al iniciar
- Búsqueda de películas en tiempo real
- Visualización de resultados en formato de tarjetas

### Sistema de Favoritos
- Agregar películas a favoritos (en desarrollo)
- Ver lista de películas favoritas

## 🔧 Configuración

Para usar la API de TMDB, necesitarás una clave de API:

1. Regístrate en [TMDB](https://www.themoviedb.org/)
2. Obtén tu API key
3. Reemplaza la clave en `src/services/api.js`

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la versión de producción
- `npm run lint` - Ejecuta el linter para verificar el código

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---