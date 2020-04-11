const funciones = require('../customFunctions');

let contenidoPreguntasFrecuentes = {
    titulo: 'Título​: ​Preguntas Frecuentes.',
    totalPreguntas: function () {
        console.log('Total de preguntas​: ' + funciones.leerJsonFaqs().total_faqs);
    },
    listaPreguntas: function () {
        console.log('Listados de preguntas.');
        for (let i = 0; i < funciones.leerJsonFaqs().faqs.length; i++) {
            console.log('');
            console.log(funciones.leerJsonFaqs().faqs[i].faq_title);
            console.log('');
            console.log(funciones.leerJsonFaqs().faqs[i].faq_answer);
            console.log('');
        }
    }              
}

module.exports = contenidoPreguntasFrecuentes;