// npm i axios 
// npm i axios json-server 

const axios = require('axios'); 
const { response } = require('express');

// GET - LISTA OS USUÁRIOS 
// INSTALAR: npm i axios json-server 
// RODAR USANDO O TERMINAL: node app.js 
axios.get("http://localhost:3001/usuarios")
.then(response => { 
    console.log('Usuários:', response.data); 
})
.catch(error => { 
    console.error('Erro ao buscar usuários:', error); 
}); 

/*
// POST - FAZ O ENVIO de ALGO 
axios.post("http://localhost:3001/usuarios", {
    //nome: 'Carla'
    //nome: 'Hugo'
    nome: 'Marta'
}).then(response => {
    console.log("Usuário adicionado:", response.data);
});
*/

axios.put("http://localhost:3001/usuarios/2",
    {
        nome: "João Silva Ubirajara"
    })
    .then(response => {
        console.log("Usuário atualizado:", response.data);
    })
    .catch(error => {
        console.error("Erro a atualizar usuário.", error.message);
    }
);

