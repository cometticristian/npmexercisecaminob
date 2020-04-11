let contenidos = require('./src/index');


let routes = {
    router: function (req,res) {
        switch (req.url) {
            case '/':
                console.log(contenidos.home.titulo);
                console.log('');
                console.log(contenidos.home.totalPeliculasCartelera());
                console.log('');
                console.log(contenidos.home.titulosOrdenados());
                console.log('');
                console.log(contenidos.home.pieDePagina());
                res.end('Home');
                break;
            case '/en-cartelera':
                console.log(contenidos.cartelera.titulo);
                console.log('');
                console.log(contenidos.cartelera.totalPeliculasCartelera());
                console.log('');
                console.log(contenidos.cartelera.tituloYResenia());
                res.end('Cartelera');
                break;
            case '/mas-votadas':
                console.log(contenidos.masVotadas.titulo);
                console.log('');
                console.log(contenidos.masVotadas.totalMejores());
                console.log('');
                console.log(contenidos.masVotadas.promedioMejores());
                console.log('');
                console.log(contenidos.masVotadas.listadoMejores());
                res.end('Mas Votadas');
                break;
            case '/sucursales':
                console.log(contenidos.sucursales.titulo);
                console.log('');
                console.log(contenidos.sucursales.totalSalas());
                console.log('');
                console.log(contenidos.sucursales.listaSalas());
                res.end('Sucursales');
                break;
            case '/contacto':
                console.log(contenidos.contacto);
                res.end('Contacto');
                break;
            case '/preguntas-frecuentes':
                console.log(contenidos.preguntasFrecuentes.titulo);
                console.log('');
                console.log(contenidos.preguntasFrecuentes.totalPreguntas());
                console.log('');
                console.log(contenidos.preguntasFrecuentes.listaPreguntas());
                res.end('Preguntas Frecuentes');
                break;  
            default:
                console.log('Elegir una opcion correcta');
            break;
        }
    }
}

module.exports = routes;
