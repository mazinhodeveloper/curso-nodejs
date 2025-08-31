// const CALC = require('./calc'); 
// console.log('Soma: ',CALC.soma(2,3)); 

// const FS = require('fs'); 
// FS.readFile('arquivo.html','utf-8',(err,data) => { 
//    if (err) throw err; 
//    console.log(data); 
// }); 

const HTTP = require('http'); 
const SERVER = HTTP.createServer((req,res) => { 
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' }); 
    res.write('Olá do Servidor!\n'); 
    res.write('Wanderson\n'); 
    res.write('Hi, Server!'); 
    res.end(); 
}); 

SERVER.listen(3000); 