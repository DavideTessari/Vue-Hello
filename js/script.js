// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Forza Ferrari❤️',
            imageSrc: 'https://dimages2.gazzettaobjects.it/files/image_640_384/uploads/2024/03/26/66029e3c46252.jpeg'
        };
    },
}).mount('#app');
