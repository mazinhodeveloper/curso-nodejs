// npm i axios 
// npm i axios json-server 

const axios = require('axios'); 

axios.get("http://localhost:3001/usuarios")
.then(response => { 
    console.log('Usuários:', response.data); 
})
.catch(error => { 
    console.error('Erro ao buscar usuários:', error); 
}); 

// POST 
//axios.post('http://localhost:3001/usuarios', {id:'4', nome:'Carla'})
// axios.post('http://localhost:3001/usuarios', {nome:'Carla'})
// .then(response => { 
//     console.log('Usuário Adicionado!', response.data); 
// })
// .catch(error => { 
//     console.error('Erro ao adicionar usuário!:', error); 
// }); 

// PUT 
//axios.put('http://localhost:3001/usuarios/2', {nome:'João Silva'})
////axios.put('http://localhost:3001/usuarios/edba', {nome:'Kleber Augusto'})
// .then(response => { 
//     console.log('Usuário alterado!', response.data); 
// })
// .catch(error => { 
//     console.error('Erro ao alterar usuário!:', error.message); 
// }); 

// DELETE 
axios.delete('http://localhost:3001/usuarios/4')
.then(response => { 
    console.log('Usuário removido com sucesso!'); 
})
.catch(error => { 
    console.error('Erro ao remover usuário!:', error.message); 
}); 
