
// npm i events
// const EventEmitter = require('events'); 
const meuEmissor = new EventEmitter(); 

meuEmissor.on('evento', () => {
    console.log('Evento Capturado!'); 
}); 

meuEmissor.emit('evento'); 
