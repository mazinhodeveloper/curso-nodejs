const db = require("../models"); 
const Tutorial = db.tutorials; 
const Op = db.Sequelize.Op; 

// Cria e salva um tutorial 
exports.create = (req, res) => { 
    if (!req.body.title) {
        res.status(400).send({
        message: "Conteudo não pode ficar em branco!"
    });
    return; 
}; 

// Cria um tutorial 
const tutorial = { 
    title: req.body.title, 
    description: req.body.description, 
    published: req.body.published ? req.body.published : false 
}; 


// Salva tutorial no db 
Tutorial.create(tutorial) 
  .then(data => { 
    res.send(data); 
  }) 
  .catch(err => { 
    res.status(500).send({ 
        message: 
          err.message || "Houve um erro ao salvar o tutorial." 
    }); 
  }); 
}; 

// Busca todos os tutoriais do banco de dados 
exports.findAll = (req, res) => {
    const title = req.query.title; 
    var condition = title ? { title: { [Op.like]: `%${title}%`} } : null; 

    Tutorial.findAll({ where: condition }) 
      .then(data => {
        res.send(data); 
      })
      .catch(err => {
        res.status(500).send({
            message: 
              err.message || "Houve um erro ao buscar tutoriais."
        });
      });
};

// Encontra um tutorial por id 

