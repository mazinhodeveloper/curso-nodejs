const postModel = require('../models/postModels'); 
const fs = require('fs'); 
const path = require('path'); 

exports.listarPosts = async (req, res) => { 
    const posts = await postModel.buscarPosts(); 

    fs.readFile(path.join(__dirname, '../views/index.html'), 'utf8', (err, html) => { 
        if (err) return res.status(500).send('Erro ao carregar a view'); 

        // ALL POSTS 
        // // const conteudo = posts.map(post => ` 
        const conteudo = posts.slice(0, 10).map(post => ` 
            <div class="post"> 
                <h2><span class="config">${post.id}</span> ${post.title}</h2> 
                <p>${post.body}</p> 
            </div> 
        `).join(''); 

        const pagina = html.replace('{{conteudo}}', conteudo); 
        res.send(pagina); 
    }); 
}; 
