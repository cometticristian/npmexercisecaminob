const funciones = require('../customFunctions');

let contenidoMasVotadas = {
    titulo: 'Título​: ​Más Votadas.',
    totalMejores: function () {
        let totalMejores = 0
        for (let i = 0; i < funciones.leerJsonMovies().movies.length; i++) {
            let average = funciones.leerJsonMovies().movies[i].vote_average;
            let mejores = average >= 7;
            totalMejores = totalMejores + mejores;
        }
        return totalMejores;
    },
    promedioMejores: function () {
        let mejoresPromedios = [];
        let total = 0;
        for (let i = 0; i < funciones.leerJsonMovies().movies.length; i++) {
            let average = funciones.leerJsonMovies().movies[i].vote_average;
            if (average >= 7) {
                mejoresPromedios.push(average);
            }
        }
        for (let i = 0; i < mejoresPromedios.length; i++) {
            total = total + mejoresPromedios[i];
        }
        return total * this.totalMejores() / 100;
    },
    listadoMejores: function () {
        let mejoresEnteras = [];
        for (let i = 0; i < funciones.leerJsonMovies().movies.length; i++) {
            let average = funciones.leerJsonMovies().movies[i].vote_average;
            if (average >= 7) {
                mejoresEnteras.push(funciones.leerJsonMovies().movies[i]);
            }
        }
        console.log(' ');
        console.log('Listado de peliculas');
        for (let i = 0; i < mejoresEnteras.length; i++) {
            console.log(' ');
            console.log(mejoresEnteras[i].title);
            console.log(' ');
            console.log(mejoresEnteras[i].vote_average);
            console.log(' ');
            console.log(mejoresEnteras[i].overview);
            console.log(' ');  
        }
    }
}

module.exports = contenidoMasVotadas;