const funciones = require('../customFunctions');

let contenidoHome = {
    titulo: 'Título​: ​Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn​.',
    totalPeliculasCartelera: function () {
        console.log('Total de peliculas en cartelera: ' + funciones.leerJsonMovies().total_movies);
    },
    titulosOrdenados: function () {
        let arrayOrdenados = [];
        for (let i = 0; i < funciones.leerJsonMovies().movies.length; i++) {
            let titulos = funciones.leerJsonMovies().movies[i].title;
            arrayOrdenados.push(titulos);
        }
        return arrayOrdenados.sort();
    },
    pieDePagina: function () {
        console.log('​Recordá que podés visitar las secciones:');
        console.log('i. En Cartelera');    
        console.log('ii. Más Votadas');
        console.log('iii. Sucursales');
        console.log('iv. Contacto');
        console.log('v. Preguntas Frecuentes');
    },
}


module.exports = contenidoHome;
