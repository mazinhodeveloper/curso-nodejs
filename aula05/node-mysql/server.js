const express = require("express"); 
const cors = require("cors"); 

const app = express(); 

var corsOptions = { 
    origin: "http://localhost:8080" 
}; 

app.use(cors(corsOptions)); 

app.use(express.json()); 

app.use(express.urlencoded({ extended: true })); 

// Adicionando as configs de model 
const db = require("../node-mysql/models"); 

db.sequelize.sync() 
  .then(() => { 
    console.log("Banco de dados sincronizado."); 
  }) 
  .catch((err) => { 
    console.log("Falha ao sincronizar db: " + err.message); 
  }); 

// Rota simples 
app.get("/", (req, res) => { 
    res.json({ message: "Bem vindo!!!" }); 
}); 

// Seta porta, escutando requests 
const PORT = process.env.PORT || 8080; 
app.listen(PORT, () => { 
    console.log(`Servidor rodando na porta ${PORT}.`); 
}); 
