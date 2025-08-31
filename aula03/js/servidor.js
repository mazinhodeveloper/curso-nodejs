const express = require('express')
const FS = require('fs'); 
const HTTP = require('http'); 
const app = express()
const PORT = 3000


app.use((req, res) => {
  FS.readFile('index.html','utf-8', (err,data) => { 
  if (err) { 
    res.status(500).send('Erro ao ler o arquivo HTML.');
  } else {
    res.send(data); 
  }
});
}); 



HTTP.createServer(app).listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`); 
}); 

