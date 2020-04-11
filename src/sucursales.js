const funciones = require('../customFunctions');

let contenidoSucursales = {
    titulo: 'Título​: ​Nuestras Salas.',
    totalSalas: function () {
        console.log('Total de salas: ' + funciones.leerJsontheaters().total_theaters);
    },
    listaSalas: function () {
        console.log('Listado de salas');
        for (let i = 0; i < funciones.leerJsontheaters().theaters.length; i++) {
            console.log('');
            console.log(funciones.leerJsontheaters().theaters[i].name);
            console.log('');
            console.log(funciones.leerJsontheaters().theaters[i].address);
            console.log('');
            console.log(funciones.leerJsontheaters().theaters[i].description);
            console.log('');
        }
    }           
}

module.exports = contenidoSucursales;