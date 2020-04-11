const fs = require('fs');

let funciones = {
    faqsJson: './data/faqs.json',
    theatersJson: './data/theaters.json',
    moviesJson: './data/movies.json',
    leerJsonMovies: function () {
        let lecturaJson = fs.readFileSync(this.moviesJson);
        lecturaJson = JSON.parse(lecturaJson);
        return lecturaJson;
    },
    leerJsonFaqs: function () {
        let lecturaJson = fs.readFileSync(this.faqsJson);
        lecturaJson = JSON.parse(lecturaJson);
        return lecturaJson;
    },
    leerJsontheaters: function () {
        let lecturaJson = fs.readFileSync(this.theatersJson);
        lecturaJson = JSON.parse(lecturaJson);
        return lecturaJson;
    },
}

module.exports = funciones;


    