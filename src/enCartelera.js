const funciones = require('../customFunctions');

let contenidoCartelera = {
    titulo: 'Título​: ​En Cartelera.',
    totalPeliculasCartelera: function () {
        console.log('Total de peliculas en cartelera: ' + funciones.leerJsonMovies().total_movies);
    },
    tituloYResenia: function () {
        for (let i = 0; i < funciones.leerJsonMovies().movies.length; i++) {
            console.log(' ');
            console.log('Titulo: ' + funciones.leerJsonMovies().movies[i].title);
            console.log(' ');
            console.log('Reseña: ' + funciones.leerJsonMovies().movies[i].overview);
            console.log(' ');
        }
    }   
}

module.exports = contenidoCartelera;