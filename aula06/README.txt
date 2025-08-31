Aula: 07 
Data: 19/07/2025 
Professor: Wanderson Guimaraes / wanderson.cfguimarae@senacsp.edu.br 
GitHub: https://github.com/alunosnodesenac/Aulas-Node/tree/main 
Terminal: git clone https://github.com/alunosnodesenac/Aulas-Node.git


## USING TERMINAL 
npm install 
npm run start 

## CREATE DB
CREATE DATABASE testdb; 
http://localhost/phpmyadmin 
http://localhost 

Postman 
GET: http://localhost:8081/api/tutorials 

Body / Raw 
POST: http://localhost:8081/api/tutorials
{
    "title": "Shit 1",
    "description": "Content Shit 1"
}
POST: http://localhost:8081/api/tutorials
{
    "title": "Number 2",
    "description": "Content Number 2"
}
{
    "title": "Number 3",
    "description": "Content Number 3",
    "published": true
}
{
    "title": "Number 4",
    "description": "Content Number 4"
}
{
    "title": "Number 5",
    "description": "Content Number 5"
}


{
    "title": "Number 6",
    "description": "Content Number 6",
    "published": true
}
PUBLISHED: http://localhost:8081/api/tutorials/published

FINDONE: http://localhost:8081/api/tutorials/4 

PUT: http://localhost:8081/api/tutorials/5 
{
    "title": "Number 5 Updated",
    "description": "Content Number 5 Updated", 
    "published": "true"
}

DELETE: http://localhost:8081/api/tutorials/3 

TRY WRONG / NEW INSERT: 
POST: http://localhost:8081/api/tutorials/3 
{
    "id": 3,
    "title": "Number 3",
    "description": "Content Number 3"
}





## REVISION 

Aula: 08 
Data: 26/07/2025 


## USING TERMINAL 
npm i
npm run start


## POSTMAN 
POST: http://localhost:8081/api/tutorials
{
    "title": "Livro1",
    "description": "Description1"
}


PUT: http://localhost:8081/api/tutorials/9 
{
    "title": "Livro1 Updated"
}

DELETE: http://localhost:8081/api/tutorials/9









## AT HOME 

TERMINAL: node --version 
npm run start 
npm run serve 


## TUTORIAL 
mkdir aula-node; cd aula-node 
nvm --version 
nvm install 16 
nvm install 12 
npm run start 





 




















https://nodejs.org 
https://github.com 
https://www.mysql.com 
https://expressjs.com 
https://sequelize.org 
https://www.postman.com 
https://expressjs.com/en/starter/hello-world.html 
https://github.com/mysqljs 
https://www.npmjs.com/package/mysql2 
https://sidorares.github.io/node-mysql2/docs 
https://sidorares.github.io/node-mysql2/docs/contributing/website 
https://expressjs.com/en/resources/middleware/cors.html 
https://medium.com/@highlanderfullstack/um-guia-para-cors-em-node-js-com-express-b576c71c50ea 






